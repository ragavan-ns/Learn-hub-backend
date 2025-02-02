const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const Routes = require('./controller/StudentsRoutes');

//-------------------------------- middleware
app.use(cors());
app.use(express.json());

//-------------------------------- Environment Variables Configuration
dotenv.config();

//-------------------------------- DataBase setup
mongoose
  .connect(
    `mongodb+srv://${process.env.MongoDB_UserName}:${process.env.MongoDB_Password}@cluster0.ycush.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

//-------------------------------- API 
app.get("/", (req, res) => {
    res.send("Hello User! Express App is running...");
});

app.use('/', Routes);

//-------------------------------- Exporting for Vercel
module.exports = app;

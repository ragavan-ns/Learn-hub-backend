const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const Port = 4201;
const Routes = require('./controller/StudentsRoutes');

//-------------------------------- middleware
app.use(cors());
app.use(express.json());

//-------------------------------- Environment Variables Configuration
dotenv.config();
const Password = process.env.MongoDB_Password;
const UserName = process.env.MongoDB_UserName;

//-------------------------------- DataBase setup
mongoose
  .connect(
    `mongodb+srv://ragavanns24:Egr1tGs7uhj6skda@cluster0.ycush.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

//-------------------------------- API 
app.get("/", (req, res) => {
    res.send("Hello User ! , Express App is running...");
});

app.use('/',Routes );

//-------------------------------- Listen to the port
app.listen(Port, ()=> {
    console.log(`Server is running on port ${Port}`);
});


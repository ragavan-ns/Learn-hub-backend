const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        role: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: Number
        },
        course: {
            type: String
        },
        status: {
            type: String
        },
    },
    {
        collection: "Students-Data",
    }
);

module.exports = mongoose.model("Students-Data",StudentSchema);
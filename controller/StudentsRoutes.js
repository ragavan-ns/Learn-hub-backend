const express = require('express');
const StudentSchema = require('../model/StudentSchema');
const router = express.Router();

// ----------------------------- Create Data
router.post('/form', async (req, res) => {
    try {
        const savedData = await StudentSchema.create(req.body);
        // console.log('Data added sucessfully ', savedData);
        res.status(201).json(savedData);
    } catch (err) {
        console.log('Error posting data : ', err);        
        res.status(500).json({ message : err.message });
    }
}); 

// ----------------------------- Read Data
router.get('/form', async (req, res) => {
    try {
        const studentsData = await StudentSchema.find();
        // console.log("Fetched data from MongoDB:", studentsData);
        res.status(200).json(studentsData);
    } catch (err) {
        console.log('Error fetching data : ', err);
        res.status(500).json({ message : err.message });
    }
});

// ------------------------------ Delete Data
router.delete('/form/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedData = await StudentSchema.findByIdAndDelete(id);
        // console.log('Data deleted successfully');
        res.status(200).json(deletedData);
    } catch (err) {
        console.log('Error deleting data : ', err);
        res.status(500).json({ message : err.message });
    }
});



module.exports = router;
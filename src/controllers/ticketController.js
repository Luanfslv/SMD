// src/controllers/exampleController.js
// const Example = require('../models/ticketModel');
const Ticket = require('../models/ticketModel');

const getExamples = async (req, res) => {
    try {
        const ticket = await Ticket.find();
        res.json(ticket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createExample = async (req, res) => {
    const { name, description } = req.body;
    const newExample = new Example({ name, description });

    try {
        const savedExample = await newExample.save();
        res.status(201).json(savedExample);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getExamples,
    createExample,
};

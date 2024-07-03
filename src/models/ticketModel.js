// src/models/exampleModel.js
const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const ticketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Example = mongoose.model('Example', ExampleSchema);
const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;

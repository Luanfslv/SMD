// src/app.js
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// Middleware
app.use(bodyParser.json());

// Rotas
app.get('/user', user);

module.exports = app;

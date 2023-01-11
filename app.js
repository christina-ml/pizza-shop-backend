const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the pizza shop!")
})

module.exports = app;
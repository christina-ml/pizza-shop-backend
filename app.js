// Dependencies
const express = require("express");
const cors = require("cors");

// Configuration
const app = express();

// Controllers
const pizzasController = require('./controllers/pizzasController.js');

// Middleware
app.use(cors());
app.use(express.json());
app.use("/pizza", pizzasController);

// Routes
app.get("/", (_req, res) => {
    res.status(200).json({ message: 'Pizza shop backend is running' });
})

app.get("*", (_req, res) => {
    res.status(404).json({error: "404 Page not found"});
})

module.exports = app;
// Dependencies
const express = require("express");
const cors = require("cors");

// Configuration
const app = express();

// Controllers
const pizzaController = require('./controllers/pizzaController.js');

// Middleware
app.use(cors());
app.use(express.json());
app.use("/pizza", pizzaController);

// Routes
app.get("/", (_req, res) => {
    res.send("Welcome to the pizza shop backend!");
})

app.get("*", (_req, res) => {
    res.status(404).json({error: "404 Page not found"});
})

module.exports = app;
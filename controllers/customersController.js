const express = require("express");
const customers = express.Router({ mergeParams: true });
const {
    getAllCustomers,
    newCustomer
} = require("../queries/customers");

// Test the url: http://localhost:9000/pizzas/2/customers, http://localhost:9000/pizzas/3/customers
customers.get("/", async (req, res) => {
    const { pizzaId } = req.params;

    try {
        const allCustomers = await getAllCustomers(pizzaId);
        res.json(allCustomers);
    } catch (err) {
        res.json(err);
    }
});

// CREATE/Sign up new customer with a chosen pizza order
customers.post("/", async (req, res) => {
    const createdCustomer = await newCustomer(req.body);
    res.status(200).json(createdCustomer);
});


module.exports = customers;
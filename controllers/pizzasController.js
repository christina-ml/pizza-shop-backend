const express = require("express");
const pizzas = express.Router();
const {
    getAllPizzas,
    getOnePizzaById
} = require("../queries/pizzas.js");

// TO DO:
// create customers for each pizza
const customersController = require("./customersController.js");
pizzas.use("/:pizzaId/customers", customersController);

// delivery

// get all pizzas
pizzas.get("/", async (req, res)=> {
    try {
        const allPizza = await getAllPizzas();
        if (allPizza[0]){
            res.status(200).json(allPizza);
        } else {
            res.status(500).json({ error: "Error: there is no pizza" });
        }
    } catch (err) {
        console.log(err);
    }
});

// get one pizza by id of {id}
pizzas.get("/:id", async(req, res) => {
    const { id } = req.params;
    try{
        const onePizza = await getOnePizzaById(id);
        if(onePizza.id){
            res.status(200).json(onePizza);
        } else {
            res.status(404).json("Error: Pizza ID not found");
        }
    } catch(err){
        return err;
    }
});

module.exports = pizzas;
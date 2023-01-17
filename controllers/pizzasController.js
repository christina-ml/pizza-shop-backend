const express = require("express");
const pizza = express.Router();
const {
    getAllPizzas,
    getOnePizzaById
} = require("../queries/pizzas.js");

// get all pizza
pizza.get("/", async (req, res)=> {
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
pizza.get("/:id", async(req, res) => {
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

module.exports = pizza;
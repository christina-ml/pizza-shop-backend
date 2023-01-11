const db = require("../db/dbConfig.js");

// get all pizza
const getAllPizza = async() => {
    try {
        const allPizza = await db.any("SELECT * FROM pizza_menu");
        return allPizza;
    } catch (error) {
        return error;
    }
}

// get one pizza by id of {id}
const getOnePizza = async(id) => {
    try{
        const onePizza = await db.one("SELECT * FROM pizza_menu WHERE id=$1", id);
        return onePizza;
    } catch(err){
        return err;
    };
};

module.exports = {
    getAllPizza,
    getOnePizza
}
const db = require('../db/dbConfig.js');

// Get all customers that ordered the same pizza by ID
const getAllCustomers = async (pizza_id) => {
    try {
      const allCustomers = await db.any(
        "SELECT * FROM customers WHERE pizza_id=$1",
        pizza_id
      );
      return allCustomers;
    } catch (err) {
      return err;
    }
};

module.exports = {
    getAllCustomers
};
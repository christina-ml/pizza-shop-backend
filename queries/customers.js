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

// Create/Sign up a new customer with a chosen pizza order
const newCustomer = async (customer) => {
    try {
        const newCustomer = await db.one(
            "INSERT INTO customers (firstname, lastname, email, phone, pizza_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [
                customer.firstname,
                customer.lastname,
                customer.email,
                customer.phone,
                customer.pizza_id,
            ]
        );
        return newCustomer;
    } catch (err) {
        return err;
    }
}

module.exports = {
    getAllCustomers,
    newCustomer
};
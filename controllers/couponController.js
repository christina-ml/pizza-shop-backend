const express = require("express");
const coupons = express.Router({ mergeParams: true });
const {
    getAllValidCoupons
} = require("../queries/coupons");

// GET - See list of all existing coupons for each pizza, if any.
// Test the url: http://localhost:9000/pizzas/2/coupons , http://localhost:9000/pizzas/1/coupons
coupons.get("/", async (req, res) => {
    try {
        const { pizzaId } = req.params;

        const allCoupons = await getAllValidCoupons(pizzaId);
        if (allCoupons[0]) {
            res.status(200).json(allCoupons);
        } else {
            res.status(500).json({error: 'No valid coupons exist for this pizza'});
        }
    } catch (err) {
        res.json(err);
    }
});

module.exports = coupons;
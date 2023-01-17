const db = require('../db/dbConfig.js');

// Get all - see valid_coupon
const getAllValidCoupons = async (coupon_pizza_id, valid_coupon) => {
    try {
      const validCoupons = await db.any(
        "SELECT * FROM coupons WHERE coupon_pizza_id=$1",
        coupon_pizza_id
      );
      return validCoupons;
    } catch (err) {
      return err;
    }
};


module.exports = {
    getAllValidCoupons
};
const mongoose = require("mongoose")
const drinkSchema =mongoose.Schema({
    drink_name: String,
    drink_flavor: String,
    drink_cost: Number
});

module.exports = mongoose.model("drinks", drinkSchema)
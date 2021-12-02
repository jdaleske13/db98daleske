const mongoose = require("mongoose")
const drinkSchema =mongoose.Schema({
    drink_name: String,
    drink_flavor: String,
    drink_cost:{
        type: Number,
        min: 0,
        max: 100}

});

module.exports = mongoose.model("drinks", drinkSchema)
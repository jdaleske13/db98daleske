const drinks = require('../models/drinks');
var Drink = require('../models/drinks');

exports.drink_list = async function(req, res) {
    try{
        theDrinks = await Drink.find();
        res.send(theDrinks);
    }
    catch(err){
        res.status(500);
        res.send('{"error": ${err}}');
    }
}

exports.drink_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Drink.findById(req.params.id)
        res.send(result)
    }
    catch(error){
        res.statu(500)
        res.send('{"error": document for id${req.params.id} not found');
    }
}

exports.drink_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Drink();
    document.drink_name = req.body.drink_name;
    document.drink_flavor = req.body.drink_flavor;
    document.drink_cost = req.body.drink_cost;
    try{
        let results = await document.save();
        res.send(results);
    }
    catch(err){
        res.status(500);
        res.send('{"error":${err}}');
    }
}

exports.drink_delete = async function(req, res) {
    console.log("delete" + req.params.id)
    try {
        result = await Drink.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    }
    catch(err){
        res.status(500)
        res.send('{"error": Error deleting ${err}}');
    }
}

exports.drink_update_put = async function(req,res) {
    console.log('update on id ${req.params.id} with body ${JSON.stringify(req.body)}')
    try {
        let toUpdate = await Drink.findById(req.params.id)
        if(req.body.drink_name)
            toUpdate.drink_name=req.body.drink_name;
        if(req.body.drink_cost) toUpdate.drink_cost = req.body.drink_cost;
        if(req.body.drink_flavor) toUpdate.drink_flavor = req.body.drink_flavor;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
        if(req.body.checkboxsale) toUpdate.sale = true; 
        else toUpdate.same = false; 
    }
    catch(err){
        res.status(500)
        res.send('{"error":${err}: Update for id${req.params.id} failed')
    }
};

exports.drink_view_all_Page = async function(req,res) {
    try{
        theDrinks = await Drink.find();
        res.render("drinks", {title: 'Drink Search Results', results: theDrinks});
    }
    catch(err){
        res.status(500);
        res.send('{"error": ${err}}');
    }
}
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

exports.drink_detail = function(req, res) {
    res.send('NOT IMPLEMENT: Drink Detail: ' +req.params.id);
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

exports.drink_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Drink delete DELETE ' + req.params.id);
}

exports.drink_update_put = function(req,res) {
    res.send('NOT IMPLEMENTED: Drink update PUT' + req.params.ids);
}
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
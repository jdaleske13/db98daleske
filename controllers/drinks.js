var Drink = require('../models/drinks');

exports.drink_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Drink List');
}

exports.drink_detail = function(req, res) {
    res.send('NOT IMPLEMENT: Drink Detail: ' +req.params.id);
}

exports.drink_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Drink create POST');
}

exports.drink_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Drink delete DELETE ' + req.params.id);
}

exports.drink_update_put = function(req,res) {
    res.send('NOT IMPLEMENTED: Drink update PUT' + req.params.ids);
}
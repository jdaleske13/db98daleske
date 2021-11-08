var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var drinks_controller = require('../controllers/drinks');

router.get('/resources', api_controller.api);

router.post('/resources/drinks', drinks_controller.drink_create_post);

router.delete('/resources/drinks/:id', drinks_controller.drink_delete);

router.put('/resources.drinks/:id', drinks_controller.drink_update_put);

router.get('/resources/drinks/:id', drinks_controller.drink_detail);
router.get('/resources/drinks', drinks_controller.drink_list);

module.exports = router;
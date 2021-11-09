var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var drinks_controller = require('../controllers/drinks');

router.get('/resource', api_controller.api);

router.post('/resource/drinks', drinks_controller.drink_create_post);

router.delete('/resource/drinks/:id', drinks_controller.drink_delete);

router.put('/resource/drinks/:id', drinks_controller.drink_update_put);

router.get('/resource/drinks/:id', drinks_controller.drink_detail);
router.get('/resource/drinks', drinks_controller.drink_list);

module.exports = router;
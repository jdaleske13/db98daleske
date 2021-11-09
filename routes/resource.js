var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var drinks_controller = require('../controllers/drinks');

router.get('/resource', api_controller.api);

router.post('/resource/drink', drinks_controller.drink_create_post);

router.delete('/resource/drink/:id', drinks_controller.drink_delete);

router.put('/resource/drink/:id', drinks_controller.drink_update_put);

router.get('/resource/drink/:id', drinks_controller.drink_detail);
router.get('/resource/drink', drinks_controller.drink_list);

module.exports = router;
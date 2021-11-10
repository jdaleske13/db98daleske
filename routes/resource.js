var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var drinks_controller = require('../controllers/drinks');

router.get('/', api_controller.api);

router.post('/drink', drinks_controller.drink_create_post);

router.delete('/drink/:id', drinks_controller.drink_delete);

router.put('/drink/:id', drinks_controller.drink_update_put);

router.get('/drink/:id', drinks_controller.drink_detail);
router.get('/drink', drinks_controller.drink_list);

module.exports = router;
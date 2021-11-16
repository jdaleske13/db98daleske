var express = require('express');
const drinks_controller = require('../controllers/drinks');
var router = express.Router();

/* GET home page. */
router.get('/', drinks_controller.drink_view_all_Page);
router.get('/detail', drinks_controller.drink_view_one_Page);
router.get('/create', drinks_controller.drink_create_Page);

module.exports = router;

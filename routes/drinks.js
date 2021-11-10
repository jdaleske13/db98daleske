var express = require('express');
const drinks_controller = require('../controllers/drinks');
var router = express.Router();

/* GET home page. */
router.get('/', drinks_controller.drink_view_all_Page);

module.exports = router;

var express = require('express');
const drinks_controller = require('../controllers/drinks');
var router = express.Router();

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

/* GET home page. */
router.get('/', drinks_controller.drink_view_all_Page);
router.get('/detail', drinks_controller.drink_view_one_Page);
router.get('/create', drinks_controller.drink_create_Page);
router.get('/update', secured, drinks_controller.drink_update_Page);
router.get('/delete', drinks_controller.drink_delete_Page);

module.exports = router;

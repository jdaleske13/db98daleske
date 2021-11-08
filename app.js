var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
var Drink = require("./models/drinks");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var drinksRouter = require('./routes/drinks');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourcesRouter = require('./routes/resources');
const { start } = require('repl');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/drinks',drinksRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('./resources', resourcesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var db = mongoose.connection;

db.on('error',console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
    console.log("Connection to DB succeeded")
});


async function recreateDB(){
  await Drink.deleteMany();

let instance1 = new Drink({drink_name:'Dr.Pepper', drink_flavor:"23 unique flavors", drink_cost:2.0});
instance1.save( function(err,doc){
  if(err) return console.error(err);
  console.log("First object saved")
})



let instance2 = new Drink({drink_name:"Sprite", drink_flavor:"lime", drink_cost:1.99});
instance2.save(function(err,doc){
  if(err) return console.error(err);
  console.log("Second object saved")
})


let instance3 = new Drink({drink_name:"Ginger Ale", drink_flavor:'Ginger', drink_cost:1.39});
instance3.save(function(err,doc){
  if(err) return console.error(err);
  console.log("Third object saved")
})
}

let reseed = true;
if (reseed) { recreateDB();}

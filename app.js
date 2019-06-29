var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('./database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var routeRouter = require('./routes/route');
var busRouter = require('./routes/buses');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.set('secretKey', '#ChaleBus2019');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/route', routeRouter);
app.use('/bus', busRouter);

//error 404
app.use(function(req,res,next){
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//handle errors
app.use(function(err, req, res,next){
    console.log(err);
    if(err.status == 404)
        res.status(404).json({message: "Peticion no encontrada", error: 404});
    else
        res.status(500).json({message:"Algo salio mal :( !!", error: 500});
});



module.exports = app;

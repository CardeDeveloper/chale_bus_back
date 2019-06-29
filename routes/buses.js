var express = require('express');
var router = express.Router();
const busModel = require('../models/bus');
const middlewares = require ('../middlewares');


router.get('/', middlewares.validateUser, function(req, res, next) {
    busModel.find({}, function(err, buses){
   
      if(err){
        next(err)
      }else{
        res.json({ status: 'success' ,message: "buses found!" , data : {buses: buses}});
      }
    });
    
  });

router.get('/:route', middlewares.validateUser, function(req, res, next) {
    busModel.find({route:req.params.route}, function(err, buses){
   
      if(err){
        next(err)
      }else{
        res.json({ status: 'success' ,message: "Buses found!" , data : {buses: buses}});
      }
    });
    
  });


  router.post('/', function(req,res,next){
    try{
     var bus = busModel.create({
        id: req.body.id,
        plate: req.body.plate,
        rfc: req.body.rfc,
        route: req.body.route,
      
      }, (err, result)=>{
        if(err){
          console.error(err)
          res.json({status: "error", message: err});
        }
          res.json({status: "success", message: "Bus Added!", data: result});    
     })
  
    
  }catch(error){
    res.status(500).json({status: "error", error: error});
  }
    
  });
  
module.exports = router;
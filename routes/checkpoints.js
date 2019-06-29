var express = require('express');
var router = express.Router();
const checkpointModel = require('../models/checkpoint');
const middlewares = require ('../middlewares');
const busModel = require('../models/bus');


router.get('/', middlewares.validateUser, function(req, res, next) {
    checkpointModel.find({}, function(err, checkpoints){
   
      if(err){
        next(err)
      }else{
        res.json({ status: 'success' ,message: "checkpoints found!" , data : {checkpoints: checkpoints}});
      }
    });
    
  });

router.get('/:route', middlewares.validateUser, function(req, res, next) {
    checkpointModel.find({route:req.params.route}, function(err, checkpoints){
   
      if(err){
        next(err)
      }else{
        res.json({ status: 'success' ,message: "checkpoints found!" , data : {checkpoints: checkpoints}});
      }
    });
    
  });


  router.post('/', function(req,res,next){
    try{
     var bus = checkpointModel.create({
        bus_id: req.body.bus_id,
        route_id: req.body.route_id,
        lat: req.body.lat,
        long: req.body.long,
      
      }, (err, result)=>{
        if(err){
          console.error(err)
          res.json({status: "error", message: err});
        }
          res.json({status: "success", message: "Checkpoint Added!", data: result});    
     })
  
    
  }catch(error){
    res.status(500).json({status: "error", error: error});
  }
    
  });
  
module.exports = router;
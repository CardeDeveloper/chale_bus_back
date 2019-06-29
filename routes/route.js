var express = require('express');
var router = express.Router();
const routeModel = require('../models/route');
const middlewares = require ('../middlewares');


router.get('/:name', middlewares.validateUser, function(req, res, next) {
    routeModel.find({name:{$regex:req.params.name,$options:"$i"}}, function(err, routes){
   
      if(err){
        next(err)
      }else{
        res.json({ status: 'success' ,message: "Routes found!" , data : {routes: routes}});
      }
    });
    
  });


  router.post('/', function(req,res,next){
    try{
     var route = routeModel.create({
        name: req.body.name,
      
      }, (err, result)=>{
        if(err){
          console.error(err)
          res.json({status: "error", message: err});
        }
          res.json({status: "success", message: "Route Added!", data: result});    
     })
  
    
  }catch(error){
    res.status(500).json({status: "error", error: error});
  }
    
  });
  
module.exports = router;
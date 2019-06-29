var express = require('express');
var router = express.Router();
const userModel = require('../models/user');
const middlewares = require ('../middlewares');


router.get('/', middlewares.validateUser, function(req, res, next) {
  userModel.find({}, function(err, users){
 
    if(err){
      next(err)
    }else{
      res.json({ status: 'success' ,message: "Users found!" , data : {users: users}});
    }
  });
  
});


router.post('/', function(req,res,next){
  try{
   var user = userModel.create({
      email: req.body.email, 
      name: req.body.name,
      password: req.body.password,
      picture: req.body.picture,
      rfc:  req.body.rfc,
      id:  req.body.id,
      is_driver:  req.body.is_driver,
    
    }, (err, result)=>{
      if(err){
        console.error(err)
        res.json({status: "error", message: err});
      }
        res.json({status: "success", message: "Usuario añadido satisfactoriamente!!", data: result});    
   })

  
}catch(error){
  res.status(500).json({status: "error", error: error});
}
  
});


module.exports = router;

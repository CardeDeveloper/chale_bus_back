const jwt = require('jsonwebtoken');
//middlewares

function validateUser(req, res, next){
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded){
        if(err){
            res.json({status: "error de autenticacion", message: err.message, data:null});
        }else{
            req.body.userId = decoded.id;
            req.body.is_driver = decoded.is_driver;
            
            next();
        }

    })
}



module.exports = {
    validateUser
};

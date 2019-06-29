
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const saltRounds= 12

var Schema = mongoose.Schema

//Define Schema
  var userSchema = new Schema({
    
    name: {type:String , required: true},
    password:{type:String , required: true},
    balance: { type: Number, default:0 },
    rfc: String,
    picture: String,
    id: String,//url identificacion
    email: {
        type: String, required: true,
        trim: true, unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    is_driver: { type: Boolean, default:false },
    created_at: { type: Date, default: Date.now },
  });

  userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next()
    });

  module.exports= mongoose.model('User',  userSchema)

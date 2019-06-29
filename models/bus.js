
const mongoose = require('mongoose');


var Schema = mongoose.Schema

//Define Schema
  var busSchema = new Schema({
    id: String,
    plate: {type:String , required: true},
    points: { type: Number, default: 0 },
    rfc: String,
    suggestions: {type:[String] , default: [""]},
    route: {type: Schema.Types.ObjectId, ref: 'Route' , required: true},
    created_at: { type: Date, default: Date.now },
  });


  module.exports= mongoose.model('Bus',  busSchema)

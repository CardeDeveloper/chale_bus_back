const mongoose = require('mongoose');

var Schema = mongoose.Schema

//Define Schema
  var checkpointSchema = new Schema({
    bus_id: {type:Schema.Types.ObjectId,ref: 'Bus', required: true},
    route_id: {type:Schema.Types.ObjectId,ref: 'Route', required: true},
    lat: {type:Number, required: true},
    long: {type:Number, required: true},
    created_at: { type: Date, default: Date.now },
  });


  module.exports= mongoose.model('Checkpoint',  checkpointSchema)

//Import the mongoose module
const mongoose = require('mongoose')


var Schema = mongoose.Schema

//Define Schema
  var ticketSchema = new Schema({
    name:String,
    created_at: { type: Date, default: Date.now },
  });




  module.exports= mongoose.model('Ticket',  ticketSchema)

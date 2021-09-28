const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true,'El nombre es necesario']
  }

}, {timestamps:true});

const Author = mongoose.model('Author',authorSchema);

module.exports = Author;
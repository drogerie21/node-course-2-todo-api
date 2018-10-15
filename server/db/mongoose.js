const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // let mongoose use promises instead of callbacks!
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');

module.exports = { mongoose };
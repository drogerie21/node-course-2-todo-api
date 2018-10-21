const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp';
mongoose.Promise = global.Promise; // let mongoose use promises instead of callbacks!

mongoose.connect(mongoURI, {useNewUrlParser: true});

module.exports = { mongoose };
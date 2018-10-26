const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;
mongoose.Promise = global.Promise; // let mongoose use promises instead of callbacks!

mongoose.connect(mongoURI, {useNewUrlParser: true});

module.exports = { mongoose };


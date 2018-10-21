var { mongoose } = require('./db/mongoose');
var { Todo } = require ('./models/todo');
var { User } = require('./models/user');


// var newTodo = new Todo({
//   text: 'Do something',
// });
// newTodo.save().then((doc)=> {
//   console.log(doc)
// }, err => {
//   console.error('Unable to save todo');
//   console.error(err);
// });


var newUser = new User({
  email: 'f_up@drogerie21.at',
});
newUser.save().then(doc => {
  console.log(doc);
});
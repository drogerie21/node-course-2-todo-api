const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.deleteMany({}) => delete all documents everything in this collection
Todo.deleteMany({}).then(result => {
  console.log(result);
});

// deleteOne, only returns result, not the document
// Todo.deleteOne({text: 'test'}).then((result) => {
//   console.log(result);
// });

// deleteOne, returns the document
// Todo.findOneAndDelete({text: 'test2'}).then((todo) => {
//   console.log(todo);
// });


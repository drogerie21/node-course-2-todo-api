const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5bcc8ab85479e006bf0af7b2';

// if (!ObjectID.isValid(id)) {
//   return console.error('id is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=> {
//   console.log('Todos: ', todos);
// });

// Todo.findOne({
//   _id: id
// }) .then(todo => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.error('id not found');
//   }
//   console.log('Todo by id: ', todo);
// }).catch(e => console.error(e));

let id = '5bcc8e7723f93807d9a7d80b';

if (!ObjectID.isValid(id)) {
  return console.error('id is not valid');
}

User.findById(id).then(user => {
  if (!user) {
    return console.error('user not found');
  }
  console.log('user by id: ', user);
}).catch(e => console.error(e));

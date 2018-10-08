// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err,client) => {
  if (err) {
    return console.error('Unable to connect to the MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.error('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.collection('Users').insertOne({
    name: 'Florian',
    age: 39,
    location: 'Graz, Austria',
  }, (err, result) => {
    if (err) {
      return console.error('Unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });


  client.close();
}); 
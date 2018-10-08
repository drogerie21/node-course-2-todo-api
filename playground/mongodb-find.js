// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err,client) => {
  if (err) {
    return console.error('Unable to connect to the MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  
  // db.collection('Todos').find({
  //   _id: new ObjectID('5bb514dd91925270849aafd2'),
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, err => {
  //   console.error('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Florian'}).toArray().then((docs) => {
    console.log(`Number of users with name Florian: ${docs.length}`);
    console.log(JSON.stringify(docs, undefined, 2)); 
  }, err => {
    console.error('Unable to fetch todos', err);
  });

  db.collection('Todos').find({name: 'Florian'}).toArray().then((docs) => {
    console.log(`Number of users with name Florian: ${docs.length}`);
    console.log(JSON.stringify(docs, undefined, 2)); 
  }, err => {
    console.error('Unable to fetch todos', err);
  });
  // client.close();
}); 
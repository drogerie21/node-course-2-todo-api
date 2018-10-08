// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err,client) => {
  if (err) {
    return console.error('Unable to connect to the MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  // deleteMany
  // db.collection('Todos').deleteMany({"text" : "Bank Austria"}).then(result => {
  //   console.log(result);
  // });
  
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Bank Austria'}).then(result => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Florian'}).then((result)=> {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5bbbac47c3f0f33119747aa8')}).then((result)=> {
    console.log(result);
  });
  // client.close();
}); 
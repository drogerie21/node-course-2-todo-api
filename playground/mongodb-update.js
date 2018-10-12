// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/ToDoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.error("Unable to connect to the MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");
    // findOneAndUpdate
    // db
    //   .collection("Todos")
    //   .findOneAndUpdate(
    //     { _id: new ObjectID("5bbcfc63e93ecd0a682e448b") },
    //     { $set: { completed: true } },
    //     { returnOriginal: false }
    //   ).then(result => {
    //     console.log(result);
    //   });
    db
      .collection("Users")
      .findOneAndUpdate(
        { _id: new ObjectID("5bb5159e88d81704354847a1") },
        { $inc: {age: 3},
          $set: {name: 'Florian'} 
        },
        { returnOriginal: false }
      ).then(result => {
        console.log(result);
      });

    // client.close();
  }
);

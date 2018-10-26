const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');


var app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then(doc => {
        res.send(doc);
    }, e => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos)=> {
        res.send({todos}); // sending an es6 object
    }, e => {
        res.status.send(e);
    });
});

app.get('/todos/:id', (req,res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send('No valid Object id');
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      res.status(404).send({error: 'No Todo found'});
    }

    res.status(200).send({todo});
  }).catch(e => {
    res.status(400).send();
  });
})

app.delete('/todos/:id', (req,res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send('No valid Object id');
  }

  Todo.findOneAndDelete({_id: new ObjectID(id)}).then((todo) => {
    if (!todo) {
      res.status(404).send({error: 'Todo to delete not found'});
    }

    res.status(200).send({todo});

  }).catch(e => {
    res.status(400).send();
  });
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};


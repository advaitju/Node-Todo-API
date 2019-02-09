const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {ObjectId} = require('mongodb')

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo')
const {User} = require('./models/user')

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc)
  })
  .catch((error) => {
    res.status(400).send(error)
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  })
  .catch((error) => {
    res.status(400).send(error)
  })
})

app.get('/todos/:id', (req, res) => {
  var id = req.params.id

  if (!ObjectId.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }

    res.status(200).send({todo})
  }).catch(error => res.status(400).send())
})

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id

  if (!ObjectId.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findByIdAndRemove(id).then(todo => {
    if (!todo) {
      return res.status(404).send()
    }

    res.status(200).send({todo})
  }).catch(error => res.status(400).send())
})

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id
  var body = _.pick(req.body, ['text', 'completed'])

  if (!ObjectId.isValid(id)) {
    return res.status(404).send()
  }

  if (_.isBoolean(body.completed) && body.completed === true) {
    body.completedAt = new Date().getTime()
  } else {
    body.completed = false
    body.completedAt = null
  }

  Todo.findByIdAndUpdate(id, {
    $set: body
  }, {
    new: true
  }).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }

    res.status(200).send({todo})
  }).catch(err => res.status(400).send())
})

// User endpoints
app.post('/users', (req, res) => {
  var user = new User({
    email: req.body.email
  })

  user.save().then((doc) => {
    res.send(doc)
  })
  .catch((error) => {
    res.status(400).send(error)
  })
})

app.get('/users', (req, res) => {
  User.find().then((users) => {
    res.send({users})
  })
  .catch((error) => {
    res.status(400).send(error)
  })
})

app.get('/users/:id', (req, res) => {
  var id = req.params.id

  if (!ObjectId.isValid(id)) {
    return res.status(404).send()
  }

  User.findById(id).then((user) => {
    if (!user) {
      return res.status(404).send()
    }

    res.status(200).send({user})
  }).catch(error => res.status(400).send())
})

app.delete('/users/:id', (req, res) => {
  var id = req.params.id

  if (!ObjectId.isValid(id)) {
    return res.status(404).send()
  }

  User.findByIdAndRemove(id).then(user => {
    if (!user) {
      return res.status(404).send()
    }

    res.status(200).send({user})
  }).catch(error => res.status(400).send())
})

app.patch('/users/:id', (req, res) => {
  var id = req.params.id
  var body = _.pick(req.body, ['email'])

  if (!ObjectId.isValid(id)) {
    return res.status(404).send()
  }

  User.findByIdAndUpdate(id, {
    $set: body
  }, {
    new: true
  }).then((user) => {
    if (!user) {
      return res.status(404).send()
    }

    res.status(200).send({user})
  }).catch(err => res.status(400).send())
})

app.listen(port, () => {
  console.log(`Started up at port ${port}`)
})

module.exports = {app}

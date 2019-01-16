// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',
{useNewUrlParser: true},
(err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log(`Connected to MongoDB server.`)
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectId('5c3d7b1f8ce5d7e7ff889886')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('5c3c6ad49a5c832b812106c8')
  }, {
    $set: {
      name: 'AJ'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  // client.close()
})

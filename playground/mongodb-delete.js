// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
{useNewUrlParser: true},
(err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log(`Connected to MongoDB server.`);
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'AJ'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteOne({
  //   _id: new ObjectId('5c3d25cbf2f96a3c6fa68c67')
  // }).then((result) => {
  //   console.log(result);
  // });

  // client.close();
});

const {ObjectId} = require('mongodb')

const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo')
const {User} = require('../server/models/user')

// var id = 'a5c4d1e9377707b5ab6be34d0'
//
// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid.')
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo)
// })
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found.')
//   }
//
//   console.log('Todos by id', todo)
// }).catch((e) => console.log(e))

var id = '5c3eb6e2dc0034719e2ebdb0'

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found.')
  }

  console.log('User by ID:', user)
}).catch((error) => console.log(error))

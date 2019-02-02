const {ObjectId} = require('mongodb')

const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo')
const {User} = require('../server/models/user')

// Todo.findOneAndRemove((result) => {
//   console.log(result)
// })

Todo.findByIdAndRemove('5c551ec3422eae17ae0c58ad').then((todo) => {
  console.log(todo)
})

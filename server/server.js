var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var todo = new Todo({
//   text: 'Buy milk',
//   completed: true,
//   completedAt: new Date()
// });

var newTodo = new Todo({
  text: '   Complete tutorial '
});

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log(JSON.stringify(e, undefined, 2));
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

var newUser = new User({
  email: 'person@example.com'
});

newUser.save().then((user) => {
  console.log('User created', user);
}, (error) => {
  console.log(JSON.stringify(error, undefined, 2));
});

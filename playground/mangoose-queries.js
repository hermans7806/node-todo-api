const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

// var id = '593e62c5bf2b86e30bc79a671';
//
// if (!ObjectID.isValid(id)) {
//   return console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   };
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

Users.findById('593b3bb17559a9b8343b814b').then((user) => {
  if (!user) {
    return console.log('User Not Found');
  };
  console.log('User by ID', user);
}).catch((e) => console.log(e));

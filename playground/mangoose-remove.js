const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '593f1a7f768dd51accbe9e79'}).then((todo) => {
  console.log(todo);
})

Todo.findByIdAndRemove('593f1a7f768dd51accbe9e79').then((todo) => {
  console.log(todo);
});

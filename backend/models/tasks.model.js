const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    require: true
  },
  day: {
    type: Date,
    required: true
  },
  reminder: {
    type: Boolean
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

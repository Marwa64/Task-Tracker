const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    trim: true,
    require: true
  },
  day: {
    type: Date,
    required: true
  },
  reminder: {
    type: String
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

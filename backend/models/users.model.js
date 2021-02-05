const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    require: true,
    minlength: 3
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

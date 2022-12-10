const validator = require('validator');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  contact: {
    type: Number,
    required: [true, 'Contact is required'],
  },
  email: {
    type: String,
    unique: [true, 'User already exists'],
    required: [true, 'Email is required'],
    validate: [validator.isEmail, 'Please enter valid email id'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
});

userSchema.methods.login = async function (password) {
  const user = this;
  const isMatch = await bcrypt.compare(password, this.password);
  if (!isMatch) {
    // return res.status(401).send('Email or password incorrect');
    throw new Error('Email or password incorrect');
  }
  return user;
};

userSchema.pre('save', async function (req, res, next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
const User = mongoose.model('User', userSchema);

module.exports = User;

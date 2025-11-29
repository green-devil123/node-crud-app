const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Invalid email format'],
    },
    age: {
      type: Number,
      min: 1,
      max: 120,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);

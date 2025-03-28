const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student'
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('User', userSchema); 
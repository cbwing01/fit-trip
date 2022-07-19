const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  phone: {
    type: Number,
    required: true
  },
  address1: { type: String },
  address2: { type: String },
  unit: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: Number },
  emergencyName: { 
    type: String,
    required: true
  },
  emergencyNum: { 
    type: Number,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  goals: {
    type: [String],
    require: true
  },
  social: {
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
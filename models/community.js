const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  members: [{
    type: mongoose.Schema.ObjectId,
    ref: 'People'
  }],
  coordinatorId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  sessions: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Session'
  }]
});

const Community = mongoose.model('Community', communitySchema);

module.exports = Community;

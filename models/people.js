const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: String,
  age: Number,
  phoneNumber: String,
  address: String,
  fatherName: String,
  motherName: String,
  dob: Date,
  disease:String, 
    selfEducation: String,
    childEducationStatus: Boolean,
  sessionAttendance: [{
    campName: String,
    date: Date,
    feedback: String,
    comments: String
  }],
  employmentStatus:Boolean,
  welfareSchemes: Boolean,
    familySize: Number,
    dependentChildren: Number,
    elderlyFamilyMembers: Number,
  income:Number,
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
    
  },
  sessions: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Session'
  }],
  
});

const People = mongoose.model('People', peopleSchema);

module.exports = People;

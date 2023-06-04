const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: String,
  age: Number,
  contact: {
    phoneNumber: String,
    email: String,
    address: String
  },
  fatherName: String,
  motherName: String,
  dob: Date,
  role: String,
  medicalInformation: {
    pastMedicalHistory: String,
    existingIllnesses: String,
    lastMedicalCheckup: Date,
    allergies: String,
    medicationInformation: String
  },
  educationalStatus: {
    educationLevel: String,
    childEducationStatus: String
  },
  sessionAttendance: [{
    campName: String,
    date: Date,
    feedback: String,
    comments: String
  }],
  employmentStatus: {
    currentStatus: String,
    skillsTrainingReceived: String
  },
  welfareSchemes: [{
    schemeName: String,
    applicationStatus: String
  }],
  familyInformation: {
    familySize: Number,
    dependentChildren: Number,
    elderlyFamilyMembers: Number
  },
  socioeconomicDetails: {
    incomeLevel: Number,
    housingConditions: String
  },
  interestsPreferences: {
    hobbiesInterests: String,
    preferredLanguages: [String]
  },
  additionalNotes: String
});

const People = mongoose.model('People', peopleSchema);

module.exports = People;

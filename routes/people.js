const express = require('express');
const router = express.Router();

const {
  getAllPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson
} = require('../controllers/people');

const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);

// Get all people
router.get('/people', getAllPeople);

// Get a person by ID
router.get('/people/:personId', getPerson);

// Create a new person
router.post('/people/create', createPerson);

// Update a person
router.put('/people/:personId', updatePerson);

// Delete a person
router.delete('/people/:personId', deletePerson);

module.exports = router;

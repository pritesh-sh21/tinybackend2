const express = require('express');
const router = express.Router();

const {
  getSession,
  createSession,
  updateSession,
  deleteSession,
  addAttendee,
  removeAttendee
} = require('../controllers/session');

const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');

const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);


// Get a session by ID
router.get('/session/:sessionId', isSignedIn, getSession);

// Create a new session
// router.post('/session/create/:userId', isSignedIn, isAuthenticated, isAdmin, createSession);

router.post('/session/create',   createSession);

// Update a session
router.put('/session/:sessionId', isSignedIn, isAuthenticated, isAdmin, updateSession);

// Delete a session
router.delete('/session/:sessionId', isSignedIn, isAuthenticated, isAdmin, deleteSession);

// Add an attendee to a session
router.put('/session/:sessionId/add-attendee', isSignedIn, isAuthenticated, isAdmin, addAttendee);

// Remove an attendee from a session
router.put('/session/:sessionId/remove-attendee', isSignedIn, isAuthenticated, isAdmin, removeAttendee);

module.exports = router;

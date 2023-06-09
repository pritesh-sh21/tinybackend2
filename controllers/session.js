const Session = require('../models/session');

// Get a session by ID
exports.getSession = (req, res) => {
  const sessionId = req.params.sessionId;
  Session.findById(sessionId)
    .exec((err, session) => {
      if (err || !session) {
        return res.status(404).json({
          error: 'Session not found'
        });
      }
      res.json(session);
    });
};

// Create a new session
exports.createSession = async(req, res) => {
  try{
    console.log(req.body);
    const session = new Session(req.body);
    await session.save();
    res.status(201).json(session);
  
  }catch(error){
    console.log(error);
    res.status(500).json({error:'Failed To create the Session'})
  }
}

// Update a session
exports.updateSession = (req, res) => {
  const sessionId = req.params.sessionId;
  Session.findByIdAndUpdate(
    sessionId,
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, session) => {
      if (err || !session) {
        return res.status(400).json({
          error: 'Failed to update session'
        });
      }
      res.json(session);
    }
  );
};

// Delete a session
exports.deleteSession = (req, res) => {
  const sessionId = req.params.sessionId;
  Session.findByIdAndRemove(sessionId, { useFindAndModify: false }, (err, session) => {
    if (err || !session) {
      return res.status(400).json({
        error: 'Failed to delete session'
      });
    }
    res.json({
      message: 'Session deleted successfully'
    });
  });
};

// Add an attendee to a session
exports.addAttendee = (req, res) => {
  const sessionId = req.params.sessionId;
  const userId = req.body.userId;
  Session.findByIdAndUpdate(
    sessionId,
    { $push: { attendees: userId } },
    { new: true, useFindAndModify: false },
    (err, session) => {
      if (err || !session) {
        return res.status(400).json({
          error: 'Failed to add attendee'
        });
      }
      res.json(session);
    }
  );
};

// Remove an attendee from a session
exports.removeAttendee = (req, res) => {
  const sessionId = req.params.sessionId;
  const userId = req.body.userId;
  Session.findByIdAndUpdate(
    sessionId,
    { $pull: { attendees: userId } },
    { new: true, useFindAndModify: false },
    (err, session) => {
      if (err || !session) {
        return res.status(400).json({
          error: 'Failed to remove attendee'
        });
      }
      res.json(session);
    }
  );
};

const People = require('../models/people');

// Get all people
exports.getAllPeople = (req, res) => {
  People.find()
    .exec((err, people) => {
      if (err) {
        return res.status(400).json({
          error: 'Failed to retrieve people'
        });
      }
      res.json(people);
    });
};

// Get a person by ID
exports.getPerson = (req, res) => {
  People.findById(req.params.personId)
    .exec((err, person) => {
      if (err || !person) {
        return res.status(404).json({
          error: 'Person not found'
        });
      }
      res.json(person);
    });
};

// Create a new person
exports.createPerson = (req, res) => {
  const person = new People(req.body);
  person.save((err, newPerson) => {
    if (err) {
      return res.status(400).json({
        error: 'Failed to create person'
      });
    }
    res.status(201).json(newPerson);
  });
};

// Update a person
exports.updatePerson = (req, res) => {
  People.findByIdAndUpdate(
    req.params.personId,
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, updatedPerson) => {
      if (err) {
        return res.status(400).json({
          error: 'Failed to update person'
        });
      }
      res.json(updatedPerson);
    }
  );
};

// Delete a person
exports.deletePerson = (req, res) => {
  People.findByIdAndRemove(req.params.personId, { useFindAndModify: false }, (err, deletedPerson) => {
    if (err || !deletedPerson) {
      return res.status(400).json({
        error: 'Failed to delete person'
      });
    }
    res.json({
      message: 'Person deleted successfully'
    });
  });
};

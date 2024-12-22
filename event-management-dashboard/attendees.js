const express = require('express');
const Attendee = require('../models/attendee');
const router = express.Router();

// GET all attendees
router.get('/', async (req, res) => {
  try {
    const attendees = await Attendee.find();
    res.json(attendees);
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST a new attendee
router.post('/', async (req, res) => {
  const attendee = new Attendee(req.body);
  try {
    await attendee.save();
    res.status(201).json(attendee);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

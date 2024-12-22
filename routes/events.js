const express = require('express');
const Event = require('../models/event');
const router = express.Router();

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST a new event
router.post('/', async (req, res) => {
  const event = new Event(req.body);
  try {
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Create Event
router.post('/', eventController.createEvent);

// Get All Events
router.get('/', eventController.getAllEvents);

// Get Event by ID
router.get('/:id', eventController.getEventById);

// Update Event
router.put('/:id', eventController.updateEvent);

// Delete Event
router.delete('/:id', eventController.deleteEvent);

module.exports = router;


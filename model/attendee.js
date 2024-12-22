const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;

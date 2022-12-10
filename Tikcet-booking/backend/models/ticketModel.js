const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  total: {
    type: Number,
  },
  available: {
    type: Number,
  },
  booked: [
    {
      type: String,
    },
  ],
  unbooked: [
    {
      type: String,
    },
  ],
});

const Ticket = mongoose.model('Ticket', userSchema);

module.exports = Ticket;

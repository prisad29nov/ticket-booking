const express = require('express');
const router = express.Router();

const {
  ticktUpdate,
  getTicket,
  updateTicket,
} = require('../controllers/ticketController');

router.post('/ticket', ticktUpdate);
router.get('/getticket', getTicket);
router.patch('/updateticket', updateTicket);

module.exports = router;

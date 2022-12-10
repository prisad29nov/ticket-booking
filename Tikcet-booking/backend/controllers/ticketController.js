const BusTicket = require('../models/ticketModel');

const ticktUpdate = async (req, res) => {
  try {
    const tickets = await BusTicket.create(req.body);
    res.status(200).send({
      status: 'successful',
      data: tickets,
    });
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const getTicket = async (req, res) => {
  try {
    const tickets = await BusTicket.find();
    res.status(200).send({
      status: 'successful',
      data: tickets,
    });
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const updateTicket = async (req, res) => {
  try {
    const updatedTicket = await BusTicket.findByIdAndUpdate(
      '633450ec5135a30a6b252501',
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      status: 'successful',
      data: updatedTicket,
    });
  } catch (e) {
    res.status(404).send(e.message);
  }
};

module.exports = { ticktUpdate, getTicket, updateTicket };

const User = require('../models/userModel');

const postUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send('User not found');
    }
    const login = await user.login(req.body.password);
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (e) {
    res.status(404).send(e.message);
  }
};

module.exports = { postUser, login };

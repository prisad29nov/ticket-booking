const mongoose = require('mongoose');

mongoose
  .connect(process.env.SERVER, {})
  .then(() => {
    console.log('connection to database successfull');
  })
  .catch(() => {
    console.log('Not connected');
  });

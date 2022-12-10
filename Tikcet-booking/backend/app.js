const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, './config.env') });
require('./mongoose/mongoose');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const ticketRouter = require('./routes/ticketRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(ticketRouter);

module.exports = app;

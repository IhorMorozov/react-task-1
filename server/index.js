const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');
const createdUserRouter = require('./routes/createdUserRouter');
const corsMiddleware = require('./middleware/cors.middleware');
const { DB_URL, PORT } = require('./config/config');

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use('/auth', authRouter);
app.use('/api', createdUserRouter);

const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

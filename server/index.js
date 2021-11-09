const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');
const createdUserRouter = require('./routes/createdUserRouter');

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@clusterforapps.wxs1c.mongodb.net/react-task-1?retryWrites=true&w=majority';
const app = express();

app.use(express.json());
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

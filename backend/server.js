const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).catch((reason) => {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Mongoose database connection established successfully');
})

const tasksRouter = require('./routes/tasks.js');
const usersRouter = require('./routes/users.js');

app.use('/tasks', tasksRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

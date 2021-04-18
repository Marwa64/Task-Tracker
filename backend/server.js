const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin:true, credentials:true }));

// prevent CORS problems
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    next();
})
app.use(express.json());
app.use(cookieParser());

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

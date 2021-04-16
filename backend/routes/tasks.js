const router = require('express').Router();
const verify = require('./verifyToken');
const Task = require('../models/tasks.model');
const User = require('../models/users.model');

router.get('/', verify, (req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', verify, (req, res) => {
  const email = req.user.email;
  const text = req.body.text;
  const day = Date.parse(req.body.day);
  const reminder = req.body.reminder;

  const newTask = new Task({email, text, day, reminder});
  //console.log(day);
  //res.send(req.user);
  newTask.save()
    .then(() => res.json('Task Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete/:id', verify, (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(tasks => res.json('Task Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

const router = require('express').Router();
const verify = require('./verifyToken');
const Task = require('../models/tasks.model');

router.get('/', verify, (req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', verify, (req, res) => {
  const email = req.body.email;
  const text = req.body.text;
  const day = Date.parse(req.body.day);
  const reminder = Number(req.body.reminder);

  const newTask = new Task({email, text, day, reminder});

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

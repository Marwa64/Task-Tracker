const router = require('express').Router();
const Task = require('../models/tasks.model');

router.route('/:email').get((req, res) => {
  Task.find({'email': req.params.email })
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email;
  const text = req.body.text;
  const day = Date.parse(req.body.day);
  const reminder = Number(req.body.reminder);

  const newTask = new Task({email, text, day, reminder});

  newTask.save()
    .then(() => res.json('Task Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(tasks => res.json('Task Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

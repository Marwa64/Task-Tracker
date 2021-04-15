const router = require('express').Router();
const User = require('../models/users.model');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.route('/').get((req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/signup').post(async (req, res) => {
  console.log(req.body);
  const { email, password} = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    //if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" });

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    const user = {email, hashPass};

    const result = await User.create({ email, password: hashPass });
    //const token = jwt.sign({ email: result.email, id: result._id}, process.env.TOKEN_SECRET, { expiresIn: '2h' });
    res.status(200).json({ result });
  } catch (e) {
    res.status(500).json({ message: 'something went wrong' });
  }
});

router.route('/login').post(async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(email);
    console.log(password);
    const existingUser = await User.findOne({ email });

    if (!existingUser) return res.status(404).json({message: "User doesn't exist"});

    const isPassCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPassCorrect) return res.status(400).json({message: "Invalid credentials"});

    const token = jwt.sign({ id: existingUser._id }, process.env.TOKEN_SECRET, { expiresIn: '2h' });
    res.header('auth-token', token);

    res.status(200).json({ result: existingUser, token: token });
  } catch (e) {
    res.status(500).json({ message: 'something went wrong' });
  }
});

module.exports = router;

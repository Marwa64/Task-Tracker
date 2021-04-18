const router = require('express').Router();
const User = require('../models/users.model');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let refreshToken, refreshTokens = [];

router.get('/', (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/signup', async (req, res) => {
  console.log(req.body);
  const { email, password} = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    const user = {email, hashPass};

    const result = await User.create({ email, password: hashPass });

    res.status(200).json({ result });
  } catch (e) {
    res.status(500).json({ message: 'something went wrong' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) return res.status(404).json({message: "User doesn't exist"});

    const isPassCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPassCorrect) return res.status(400).json({message: "Invalid credentials"});

    const token = jwt.sign({ email, id: existingUser._id }, process.env.TOKEN_SECRET, { expiresIn: '1m' });
    refreshToken = jwt.sign({ email, id: existingUser._id }, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);

    res.header('auth-token', token);
    res.cookie('refresh_token', refreshToken, {
      expires: new Date(Date.now() + 31536000000), // time until expiration (1 year)
      secure: false, // set to true if your using https
      httpOnly: true,
    });

    res.status(200).json({ token });
  } catch (e) {
    res.status(500).json({ message: 'something went wrong' });
  }
});

router.get('/token', (req, res) => {
  const refreshToken = req.cookies.refresh_token;
  console.log(refreshToken);
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign({ email: user.email, id: user.id }, process.env.TOKEN_SECRET, { expiresIn: '1m' });
    res.json({ token: accessToken });
  });

});

module.exports = router;

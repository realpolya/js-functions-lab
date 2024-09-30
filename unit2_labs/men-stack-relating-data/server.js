import { config } from 'dotenv';
config();
import express, { urlencoded } from 'express';
const app = express();
import { connect, connection } from 'mongoose';
import methodOverride from 'method-override';
import morgan from 'morgan';
import session from 'express-session';

import authController from './controllers/auth.js';

const port = process.env.PORT ? process.env.PORT : '3000';

connect(process.env.MONGODB_URI);

connection.on('connected', () => {
  console.log(`Connected to MongoDB ${connection.name}.`);
});

app.use(urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  res.render('index.ejs', {
    user: req.session.user,
  });
});

app.get('/vip-lounge', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to the party ${req.session.user.username}.`);
  } else {
    res.send('Sorry, no guests allowed.');
  }
});

app.use('/auth', authController);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});

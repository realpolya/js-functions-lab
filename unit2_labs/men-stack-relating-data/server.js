import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override";
import morgan from "morgan";

// models
import User from "./models/user.js";

// controllers
import authController from "./controllers/auth.js";
import recipesController from "./controllers/recipes.js";
import ingredientsController from "./controllers/ingredients.js";

// middleware functions
import { isSignedIn } from "./middleware/is-signed-in.js";
import { userToView } from "./middleware/user-view.js";

import session from "express-session";
// import MongoStore from "mongo-connect"; creates an issue

// initialize express
const app = express();

// if there is no environment variable, set it to 3000
const PORT = process.env.PORT ? process.env.PORT : "3000"; // ternary statement

// mongoose connect
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// middleware
const middleware = () => {
  
  app.use(express.static('public')); // CSS file
  // first allows to parse URL-encoded data from forms
  app.use(express.urlencoded({ extended: false }));
  app.use(methodOverride("_method"));
  app.use(morgan('dev'));

  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // store: MongoStore.create({
    //   mongoUrl: process.env.MONGO_URI,
    // })
  }))

  // routes to authenticate
  app.use(userToView);

  // use ejs
  app.set('view engine', 'ejs');

}
middleware();

// ROUTES

// GET home
app.get("/", (req, res) => {
  console.log(req.session.user);
  res.render("index", { user: req.session.user });
});


app.use("/auth", authController);

// need to be signed in
app.use(isSignedIn);
app.use("/recipes", recipesController);
app.use("/ingredients", ingredientsController);

// GET signed-in ?
app.get("/vip-lounge", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to the party ${req.session.user.username}`);
  } else {
    res.send("Sorry, no guests allowed")
  }
})

// LISTEN
app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}!`);
})


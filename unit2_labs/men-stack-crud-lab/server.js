import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import Patient from "./models/patient.js";
import Physician from "./models/physician.js";
import favicon from "serve-favicon";
import morgan from "morgan";
import methodOverride from "method-override";

// initialize express
const app = express();

// app.use method
app.use(favicon('public/favicon.ico'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));

// use ejs
app.set('view engine', 'ejs');

// connect to mongoDB ward collection
mongoose.connect(process.env.MONGODB_URI);

// check the connection
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
})

// port 3000
app.listen(3000, () => {
    console.log("Listening at 3000");
});

// GET: render home
app.get("/", (req, res) => {
    res.render("index");
})

// GET: list of patients

// GET: list of physicians

// GET: new patient
app.get("/patients/new", (req, res) => {
    res.render("patients/new");
})

// POST: new patient
app.post("/patients", async (req, res) => {
    // req.body.patient = true;
    console.log(req.body)

    await Patient.create(req.body)

    res.render("index");
})

// GET: new physician

// POST: new physician
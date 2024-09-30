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
app.get("/patients", async (req, res) => {
    const allPatients = await Patient.find();
    res.render("patients/list", { allPatients })    
})

// GET: list of physicians
app.get("/physicians", async (req, res) => {
    const allPhysicians = await Physician.find();
    res.render("physicians/list", { allPhysicians })    
})

// GET: new patient
app.get("/patients/new", async (req, res) => {
    const allPhysicians = await Physician.find();
    res.render("patients/new", { allPhysicians });
})

// POST: new patient
app.post("/patients", async (req, res) => {
    await Patient.create(req.body)
    res.render("index");
})

// GET: new physician
app.get("/physicians/new", (req, res) => {
    res.render("physicians/new");
})

// POST: new physician
app.post("/physicians", async (req, res) => {
    await Physician.create(req.body)
    res.render("index");
})

// GET: profile page for a person
app.get("/profile/:item", async (req, res) => {
    
    // find the necessary person
    const id = req.params.item; 
    let person;
    try {
        person = await Patient.findById(id);
        
        if (!person) {
            person = await Physician.findById(id);
        }
    } catch (err) {
        console.log(err);
    }

    // console.log(person.physician)
    // console.log(typeof(person))

    // console.log(Object.keys(person))
    // console.log(person.hasOwnProperty('inpatient'))

    // let type = "physician";
    // if (Object.keys(person).includes("inpatient")) {
    //     type = "patient";
    // }

    res.render("profile", { person });
});

// PUT: profile page update

// DELETE: profile delete
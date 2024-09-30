import mongoose from "mongoose";

export default mongoose.model('Patient', new mongoose.Schema({
    physician: String,
    sex: String,
    name: String,
    age: Number,
    height: Number,
    weight: Number,
    condition: String,
    symptoms: String,
    inpatient: Boolean
}))
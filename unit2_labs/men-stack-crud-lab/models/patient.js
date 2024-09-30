import mongoose from "mongoose";

export default mongoose.model('Patient', new mongoose.Schema({
    physician: String,
    name: String,
    age: Number,
    sex: String,
    height: Number,
    weight: Number,
    condition: String,
    symptoms: String,
    inpatient: Boolean
}))
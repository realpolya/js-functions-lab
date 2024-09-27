import mongoose from "mongoose";

export default mongoose.model('Physician', new mongoose.Schema({
    patient: Boolean,
    name: String,
    specialty: String
}))
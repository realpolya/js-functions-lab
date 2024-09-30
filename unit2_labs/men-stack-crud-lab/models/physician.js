import mongoose from "mongoose";

export default mongoose.model('Physician', new mongoose.Schema({
    name: String,
    specialty: String,
    available: Boolean,
    bio: String
}))
import mongoose from 'mongoose';

export default mongoose.model('User', new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true
    }
}))
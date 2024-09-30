import { Schema, model } from 'mongoose';

export default model("Recipe", Schema({
    name: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ingredients: {
        type: [Schema.Types.ObjectId],
        required: false
    }
}))

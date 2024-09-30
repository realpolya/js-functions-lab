import { Schema, model } from 'mongoose';

export default model('Ingredient', Schema({
    name: {
        type: String,
        required: true
    }
}))
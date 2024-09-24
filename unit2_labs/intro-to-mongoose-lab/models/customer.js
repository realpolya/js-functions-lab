import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: String,
    age: Number, 
});

export const Customer = mongoose.model('Customer', customerSchema);
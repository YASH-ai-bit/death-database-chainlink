import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    name: { type: String, required: true},
    yearOfBirth: { type: Number, required: true }
});

export default mongoose.model('Person', personSchema); 
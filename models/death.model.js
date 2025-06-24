import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    name: { type: String, required: true},
    dateOfBirth: { type: Date, required: true },
});

export default mongoose.model('Person', personSchema); 
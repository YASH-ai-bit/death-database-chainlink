import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Person from '../models/death.model.js';
dotenv.config();

const people = [
    { name: 'John Doe', yearOfBirth: 1950 },
    { name: 'Jane Smith', yearOfBirth: 1945 },
    { name: 'Albert Johnson', yearOfBirth: 1930 },
    { name: 'Mary Williams', yearOfBirth: 1960 },
    { name: 'James Brown', yearOfBirth: 1975 },
    { name: 'Patricia Jones', yearOfBirth: 1980 },
    { name: 'Robert Garcia', yearOfBirth: 1925 },
    { name: 'Linda Martinez', yearOfBirth: 1955 },
    { name: 'Michael Rodriguez', yearOfBirth: 1970 },
    { name: 'Barbara Hernandez', yearOfBirth: 1940 },
    { name: 'David Wilson', yearOfBirth: 1985 },
    { name: 'Jennifer Anderson', yearOfBirth: 1990 },
    { name: 'Richard Thomas', yearOfBirth: 1950 },
    { name: 'Susan Taylor', yearOfBirth: 1978 },
    { name: 'Joseph Moore', yearOfBirth: 1948 }
];

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await Person.deleteMany({});
        await Person.insertMany(people);
        console.log('Database seeded with 50 people!');
        process.exit(0);
    } catch (err) {
        console.error('Seeding error:', err);
        process.exit(1);
    }
}

seed(); 
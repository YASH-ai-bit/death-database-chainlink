import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Person from '../models/death.model.js';
dotenv.config();

const people = [
    { name: 'John Doe', dateOfBirth: '1950-01-01' },
    { name: 'Jane Smith', dateOfBirth: '1945-03-12' },
    { name: 'Albert Johnson', dateOfBirth: '1930-07-22' },
    { name: 'Mary Williams', dateOfBirth: '1960-09-15' },
    { name: 'James Brown', dateOfBirth: '1975-02-28' },
    { name: 'Patricia Jones', dateOfBirth: '1980-06-10' },
    { name: 'Robert Garcia', dateOfBirth: '1925-12-01' },
    { name: 'Linda Martinez', dateOfBirth: '1955-04-18' },
    { name: 'Michael Rodriguez', dateOfBirth: '1970-08-25' },
    { name: 'Barbara Hernandez', dateOfBirth: '1940-10-05' },
    { name: 'David Wilson', dateOfBirth: '1985-05-30' },
    { name: 'Jennifer Anderson', dateOfBirth: '1990-03-03' },
    { name: 'Richard Thomas', dateOfBirth: '1952-07-17' },
    { name: 'Susan Taylor', dateOfBirth: '1978-09-09' },
    { name: 'Joseph Moore', dateOfBirth: '1948-01-23' },
    { name: 'Jessica Jackson', dateOfBirth: '1982-12-12' },
    { name: 'Thomas White', dateOfBirth: '1963-06-06' },
    { name: 'Sarah Harris', dateOfBirth: '1971-04-04' },
    { name: 'Charles Martin', dateOfBirth: '1938-10-10' },
    { name: 'Karen Thompson', dateOfBirth: '1959-11-19' },
    { name: 'Christopher Garcia', dateOfBirth: '1988-08-08' },
    { name: 'Nancy Martinez', dateOfBirth: '1942-03-15' },
    { name: 'Daniel Robinson', dateOfBirth: '1976-07-07' },
    { name: 'Lisa Clark', dateOfBirth: '1983-05-05' },
    { name: 'Matthew Rodriguez', dateOfBirth: '1992-02-02' },
    { name: 'Betty Lewis', dateOfBirth: '1957-09-09' },
    { name: 'Anthony Lee', dateOfBirth: '1968-12-12' },
    { name: 'Helen Walker', dateOfBirth: '1933-01-01' },
    { name: 'Donald Young', dateOfBirth: '1947-08-08' },
    { name: 'Ashley King', dateOfBirth: '1995-10-10' },
    { name: 'Steven Wright', dateOfBirth: '1961-12-12' },
    { name: 'Kimberly Scott', dateOfBirth: '1987-02-02' },
    { name: 'Paul Green', dateOfBirth: '1954-03-03' },
    { name: 'Donna Adams', dateOfBirth: '1979-05-05' },
    { name: 'George Baker', dateOfBirth: '1937-07-07' },
    { name: 'Emily Nelson', dateOfBirth: '1991-09-09' },
    { name: 'Kenneth Carter', dateOfBirth: '1966-11-11' },
    { name: 'Deborah Mitchell', dateOfBirth: '1951-01-01' },
    { name: 'Joshua Perez', dateOfBirth: '1984-03-03' },
    { name: 'Jessica Roberts', dateOfBirth: '1993-05-05' },
    { name: 'Brian Turner', dateOfBirth: '1972-07-07' },
    { name: 'Shirley Phillips', dateOfBirth: '1949-09-09' },
    { name: 'Edward Campbell', dateOfBirth: '1964-12-12' },
    { name: 'Angela Parker', dateOfBirth: '1986-02-02' },
    { name: 'Jason Evans', dateOfBirth: '1994-04-04' },
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
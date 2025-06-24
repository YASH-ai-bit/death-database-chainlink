import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import deathRoutes from './routes/death.route.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/death', deathRoutes);

app.listen(8080, () => {
    console.log(`Server running on port 8080`);
});

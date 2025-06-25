import express from 'express';
const router = express.Router();
import Person from '../models/death.model.js';

// Add a person
router.post('/', async (req, res) => {
    try {
        const { name, dateOfBirth } = req.body;
        const person = new Person({ name, dateOfBirth });
        await person.save();
        res.status(201).json(person);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:name/:dateOfBirth/is-dead', async (req, res) => {
  try {
    console.log("Checking for:", req.params.name, req.params.dateOfBirth);

    const person = await Person.findOne({ 
      name: req.params.name, 
      dateOfBirth: req.params.dateOfBirth
    });

    if (!person) return res.status(404).json({ error: 'Person not found' });

    res.json({ name: person.name, dateOfBirth: person.dateOfBirth, isDead: true });
  } catch (err) {
    console.error("Mongo error:", err);
    res.status(500).json({ error: err.message });
  }
});


export default router; 
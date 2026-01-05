const express = require('express');
const router = express.Router();
const { curriculum } = require('../data/curriculum');
const { scenarios } = require('../data/scenarios');

router.get('/lessons', (req, res) => {
  res.json(curriculum);
});

router.get('/lessons/:id', (req, res) => {
  const lesson = curriculum.find(l => l.id === req.params.id);
  if (!lesson) {
    return res.status(404).json({ error: 'Lesson not found' });
  }
  res.json(lesson);
});

router.get('/scenarios', (req, res) => {
  res.json(scenarios);
});

router.get('/scenarios/:id', (req, res) => {
  const scenario = scenarios.find(s => s.id === req.params.id);
  if (!scenario) {
    return res.status(404).json({ error: 'Scenario not found' });
  }
  res.json(scenario);
});

module.exports = router;

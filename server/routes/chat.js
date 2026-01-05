const express = require('express');
const router = express.Router();
const coachService = require('../services/coachService');

router.post('/', async (req, res) => {
  try {
    const { messages, context } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const response = await coachService.chat(messages, context);
    res.json(response);
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/lesson/:lessonId', async (req, res) => {
  try {
    const { lessonId } = req.params;
    const { question } = req.body;

    const response = await coachService.getLesson(lessonId, question);
    res.json(response);
  } catch (error) {
    console.error('Lesson error:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/scenario/:scenarioId', async (req, res) => {
  try {
    const { scenarioId } = req.params;
    const { response: userResponse } = req.body;

    if (!userResponse) {
      return res.status(400).json({ error: 'User response is required' });
    }

    const response = await coachService.handleScenario(scenarioId, userResponse);
    res.json(response);
  } catch (error) {
    console.error('Scenario error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

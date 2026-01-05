const Anthropic = require('@anthropic-ai/sdk');
const { getSystemPrompt } = require('../data/prompts');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

class CoachService {
  async chat(messages, context = {}) {
    try {
      const systemPrompt = getSystemPrompt(context);

      const response = await anthropic.messages.create({
        model: process.env.CLAUDE_MODEL || 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system: systemPrompt,
        messages: messages,
      });

      return {
        content: response.content[0].text,
        usage: response.usage,
      };
    } catch (error) {
      console.error('Error calling Claude API:', error);
      throw new Error('Failed to get response from AI coach');
    }
  }

  async getLesson(lessonId, userQuestion = null) {
    const context = {
      mode: 'lesson',
      lessonId: lessonId,
      userQuestion: userQuestion,
    };

    const messages = [
      {
        role: 'user',
        content: userQuestion || `Please teach me lesson ${lessonId} about AI Product Management.`,
      },
    ];

    return this.chat(messages, context);
  }

  async handleScenario(scenarioId, userResponse) {
    const context = {
      mode: 'scenario',
      scenarioId: scenarioId,
    };

    const messages = [
      {
        role: 'user',
        content: userResponse,
      },
    ];

    return this.chat(messages, context);
  }
}

module.exports = new CoachService();

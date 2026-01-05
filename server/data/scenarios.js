const scenarios = [
  {
    id: 'recommendation-system',
    title: 'Building a Product Recommendation System',
    context: 'You are a PM at an e-commerce company with 10M monthly active users. Your CEO wants to increase conversion rates and average order value. The engineering team suggests building an AI-powered product recommendation system.',
    challenge: 'How would you approach this initiative? Consider: What metrics would you track? What data do you need? How would you prioritize this vs other initiatives? What are the risks?',
    difficulty: 'Intermediate',
    category: 'Product Strategy'
  },
  {
    id: 'bias-detection',
    title: 'Handling Bias in ML Model',
    context: 'Your team has built a resume screening AI tool that helps recruiters filter candidates. During testing, you discover the model shows bias against certain demographic groups, likely due to historical hiring patterns in the training data.',
    challenge: 'What steps would you take to address this? How would you communicate this to stakeholders? What changes would you make to the product and process?',
    difficulty: 'Advanced',
    category: 'Ethics & Responsibility'
  },
  {
    id: 'model-performance',
    title: 'Model Performance Degradation',
    context: 'Your AI-powered fraud detection system has been in production for 6 months. You notice the model accuracy has dropped from 94% to 87%. Customer complaints about false positives are increasing.',
    challenge: 'How would you diagnose the issue? What questions would you ask the ML team? What short-term and long-term solutions would you consider?',
    difficulty: 'Advanced',
    category: 'Product Operations'
  },
  {
    id: 'ai-vs-rules',
    title: 'AI vs Rules-Based Approach',
    context: 'Your team wants to build a content moderation system. Some engineers advocate for a complex deep learning model, while others suggest starting with a rules-based approach combined with keyword matching.',
    challenge: 'How would you decide between these approaches? What factors would you consider? How would you frame this decision for your team?',
    difficulty: 'Intermediate',
    category: 'Technical Decision Making'
  },
  {
    id: 'data-cold-start',
    title: 'Cold Start Problem',
    context: 'You are launching a new AI-powered personalization feature, but you need user behavior data to train the model. This creates a chicken-and-egg problem: you need data to personalize, but need users to get data.',
    challenge: 'How would you solve this cold start problem? What strategies would you use to bootstrap the system? How would you set user expectations during the early phase?',
    difficulty: 'Advanced',
    category: 'Product Strategy'
  },
  {
    id: 'resource-allocation',
    title: 'Resource Allocation: New Features vs Model Improvement',
    context: 'You have a working AI product with 85% accuracy. Users are requesting new features, but your ML team says they could improve the model to 92% accuracy with 2 months of work.',
    challenge: 'How would you prioritize between new features and model improvement? What framework would you use to make this decision? How would you communicate your decision?',
    difficulty: 'Intermediate',
    category: 'Prioritization'
  },
  {
    id: 'explainability',
    title: 'AI Explainability Requirements',
    context: 'You are building a loan approval AI system for a fintech company. Regulators require that you can explain why the model makes specific decisions, but your ML team says the most accurate model (a deep neural network) is a "black box".',
    challenge: 'How would you navigate this tradeoff between accuracy and explainability? What options would you explore? How would you work with legal, compliance, and engineering?',
    difficulty: 'Advanced',
    category: 'Compliance & Ethics'
  },
  {
    id: 'ab-test-design',
    title: 'Designing an A/B Test for AI Feature',
    context: 'You are ready to launch a new AI-powered search ranking algorithm. You need to design an A/B test to validate it improves user engagement without negatively impacting other metrics.',
    challenge: 'How would you design this A/B test? What metrics would you track? How long would you run it? What guardrail metrics would you monitor? What would success look like?',
    difficulty: 'Intermediate',
    category: 'Experimentation'
  }
];

module.exports = { scenarios };

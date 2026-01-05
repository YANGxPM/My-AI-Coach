# AI PM Coach

An AI-powered Product Management coaching application designed to help you kickstart your AI PM career. Learn AI/ML fundamentals, practice real-world scenarios, and get personalized guidance from an expert AI coach powered by Claude.

## Features

- **Interactive Chat**: Ask questions and get instant feedback on AI Product Management topics
- **Structured Learning Path**: 10 comprehensive lessons covering everything from AI fundamentals to product strategy
- **Practice Scenarios**: 8 real-world case studies to apply your knowledge and get expert feedback
- **Personalized Coaching**: Get tailored guidance based on your questions and learning style

## Tech Stack

- **Frontend**: React, Vite, React Router, Axios
- **Backend**: Node.js, Express
- **AI**: Anthropic Claude API (Sonnet 3.5)
- **Styling**: Custom CSS with modern design

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Anthropic API key ([Get one here](https://console.anthropic.com))

## Installation

### 1. Clone the repository

```bash
cd AI-Coach
```

### 2. Set up environment variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your Anthropic API key:

```
ANTHROPIC_API_KEY=your_actual_api_key_here
PORT=3001
NODE_ENV=development
```

### 3. Install dependencies

#### Install server dependencies:

```bash
cd server
npm install
cd ..
```

#### Install client dependencies:

```bash
cd client
npm install
cd ..
```

### 4. Run the application

You can run both the frontend and backend together:

#### Option 1: Run both together (from root directory)

First install concurrently:
```bash
npm install concurrently nodemon
```

Then run:
```bash
npm run dev
```

#### Option 2: Run separately

Terminal 1 - Backend:
```bash
cd server
npm run dev
```

Terminal 2 - Frontend:
```bash
cd client
npm run dev
```

### 5. Access the application

Open your browser and go to:
```
http://localhost:5173
```

The backend API will be running on:
```
http://localhost:3001
```

## Usage

### Chat Mode
- Ask any questions about AI Product Management
- Get instant, personalized responses
- Perfect for clarifying concepts or exploring specific topics

### Lessons
- Browse 10 structured lessons from beginner to advanced
- Click on any lesson to start learning
- Each lesson covers key concepts with real-world examples

### Practice Scenarios
- Work through 8 real-world PM case studies
- Present your approach and get detailed feedback
- Scenarios cover ethics, strategy, prioritization, and more

## Learning Path

The curriculum covers:

1. Introduction to AI Product Management
2. AI/ML Fundamentals for PMs
3. Data Strategy for AI Products
4. Framing Problems for AI Solutions
5. AI Ethics and Responsible AI
6. Working Effectively with ML Teams
7. AI Product Development Lifecycle
8. User Experience with AI Products
9. Common AI Use Cases and Patterns
10. AI Product Strategy

## Project Structure

```
AI-Coach/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Chat.jsx
│   │   │   ├── Lessons.jsx
│   │   │   └── Scenarios.jsx
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
├── server/                # Node.js backend
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   ├── data/             # Curriculum and prompts
│   │   ├── curriculum.js
│   │   ├── scenarios.js
│   │   └── prompts.js
│   ├── index.js
│   └── package.json
├── .env.example
├── .gitignore
└── README.md
```

## API Endpoints

### Chat
- `POST /api/chat` - General chat with AI coach
- `POST /api/chat/lesson/:lessonId` - Get lesson content
- `POST /api/chat/scenario/:scenarioId` - Submit scenario response

### Curriculum
- `GET /api/curriculum/lessons` - Get all lessons
- `GET /api/curriculum/lessons/:id` - Get specific lesson
- `GET /api/curriculum/scenarios` - Get all scenarios
- `GET /api/curriculum/scenarios/:id` - Get specific scenario

## Customization

### Adding New Lessons
Edit `server/data/curriculum.js` to add new lessons to the learning path.

### Adding New Scenarios
Edit `server/data/scenarios.js` to add new practice scenarios.

### Modifying the AI Coach
Edit `server/data/prompts.js` to customize the coaching style and system prompts.

## Troubleshooting

### API Key Issues
- Make sure your `.env` file is in the root directory
- Verify your Anthropic API key is valid
- Check that the server is reading the environment variables

### Connection Issues
- Ensure the backend is running on port 3001
- Check that the frontend is configured to connect to `http://localhost:3001`
- Verify CORS is enabled in the backend

### Module Not Found
- Run `npm install` in both `/server` and `/client` directories
- Delete `node_modules` and reinstall if issues persist

## Contributing

Feel free to submit issues or pull requests to improve the AI PM Coach!

## License

MIT

## Acknowledgments

- Powered by [Anthropic's Claude](https://www.anthropic.com)
- Built to help aspiring AI PMs succeed in their careers

## Previous version
# My AI Coach
**[阅读中文版](README_zh.md)**   
  
A strict AI coach who can help teach me knowledge on Product Management.  
Link: https://creator.voiceflow.com/share/69380ff9e00121d793684621/development  
  
Project Name: PM AI Coach  
Status: v1.0  
Owner: [YANGxPM]  
Date: December 2025    
  
## 1. Problem Statement - Why I built this project
Aspiring Product Managers struggle to practice for interviews effectively.  
* Current Solution: They read static books or use generic ChatGPT.
* Gap: Generic ChatGPT often gives vague or incorrect advice that conflicts with specific frameworks (like CIRCLES or STAR) required by top tech companies.
* Opportunity: Create a RAG-based (Retrieval-Augmented Generation) bot that answers only based on trusted interview frameworks, ensuring high-fidelity practice.

## 2. Target Audience
* Primary Persona: "The Aspiring PM." High intent, stressed, looking for quick, verified answers and mock questions.

## 3. Success Metrics (KPIs)
* North Star Metric: % of responses rated "Helpful" (Thumbs Up) by users.
* AI Quality Metric (Grounding): % of answers that can be directly cited back to the uploaded PDF (Target: >90%).
* Guardrail Metric: 0% occurrence of "false facts" (Hallucinations) regarding standard frameworks.

## 4. Data Strategy (The "Knowledge Base")
* Source Data: [Name of the PDF you used, e.g., "The PM Interview Cheat Sheet"].
* Data Cleaning: Removed headers, footers, and images to ensure the vector database ingests only clean text.
* Refresh Frequency: Static for MVP (Manual update required).

## 5. Technical Specifications (The AI Logic)
* Model: GPT-4o or Claude 3.5 Sonnet (via Voiceflow).
* Temperature (Creativity): 0.1 (Set very low).
    * Reasoning: We do not want creativity; we want factual accuracy based on the provided text.
* Context Window: Limit to last 3 turns to keep costs low and focus relevant.

## 6. System Prompt / Persona
The following instructions govern the AI's behavior:
"You are an expert Senior PM Interviewer. You are helpful but strict. Context: You have access to a specific Knowledge Base of interview frameworks. Instructions:
1. Answer the user's question using ONLY the provided Knowledge Base.
2. Format all answers with clear headers and bullet points.
3. If the user asks about a topic not in the Knowledge Base (e.g., coding, cooking), politely decline and steer them back to Product Management.
4. Do not provide generic advice found outside the provided text."

## 7. User Experience (UX) Requirements
* Onboarding: The bot must proactively state what it can and cannot do.
    * Copy: "I am trained on the [X] framework. Ask me about estimation questions or product design."
* Latency Handling: If the model takes >3 seconds to retrieve data, display a "Thinking..." animation to prevent user drop-off.
* Feedback Loop: Every response must have a "Thumbs Up / Thumbs Down" icon.
    * Action: Negative feedback logs the query for manual review.



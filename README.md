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

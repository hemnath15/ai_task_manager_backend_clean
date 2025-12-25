# AI Task Management System – Backend

A scalable backend API built with **Node.js, Express, and TypeScript**, providing authentication, task management, and AI-powered insights.

---

## Features

- User authentication using JWT
- Secure protected APIs
- Task CRUD operations
- AI-generated task insights
- MongoDB data persistence
- Centralized error handling

---

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- dotenv
- OpenAI / AI Service

---

## Folder Structure

src/
├── config/ # Database configuration
├── controllers/ # Request handling logic
├── middleware/ # Auth & error handling
├── models/ # MongoDB schemas
├── routes/ # API routes
├── services/ # AI and external services
├── utils/ # Helper utilities
├── app.ts # Express app setup
├── server.ts # Server startup


---

## Authentication

- JWT-based authentication
- Tokens generated on login/signup
- Protected routes use auth middleware

---

## API Routes

### Auth
- POST /api/auth/signup
- POST /api/auth/login
### Tasks
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id
### Insights
- Uses AI service to analyze user tasks
- Generates productivity insights
- Encapsulated in `services/aiService.ts`

---

## Environment Variables

Create a `.env` file:
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_api_key

---

## Running the Backend

### 1. Install dependencies
```bash
npm install
Start server = npm run dev

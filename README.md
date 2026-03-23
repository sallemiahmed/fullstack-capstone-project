# GiftLink - Full Stack Capstone Project

A full-stack gift giving and sharing platform built with Node.js, Express, MongoDB, and React.

## Features
- Browse and search available gifts
- User registration and authentication
- Sentiment analysis for gift reviews
- CI/CD pipeline with GitHub Actions

## Tech Stack
- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React.js
- **Sentiment Analysis:** Natural (NLP library)
- **Authentication:** JWT, bcryptjs
- **CI/CD:** GitHub Actions
- **Containerization:** Docker

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB
- Docker (optional)

### Installation
1. Clone the repository
2. Install dependencies: `npm install` in each service directory
3. Set up environment variables
4. Run: `node giftlink-backend/app.js`

## Project Structure
```
fullstack-capstone-project/
├── giftlink-backend/
│   ├── app.js
│   ├── db.js
│   └── routes/
│       ├── authRoutes.js
│       ├── giftRoutes.js
│       └── searchRoutes.js
├── giftlink-frontend/
│   └── src/components/
│       ├── LoginPage.js
│       └── RegisterPage.js
├── sentiment/
│   └── index.js
├── .github/workflows/
│   └── ci-cd.yml
└── user-story.md
```

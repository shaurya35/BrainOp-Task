# BrainOp Assignment

Project Description

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Dependencies](#dependencies)
- [Setup](#setup)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tasks](#Tasks)


## Overview

Overview here.

## Features

- Infinite Scroll on Posts page
- Signup Authentication
- Minimal Design

## Dependencies

- bcrypt
- cors
- express
- jsonwebtoken
- mongoose
- axios
- react
- react-router
- tailwind

## Setup

1. Clone the repository:

```bash
git clone https://github.com/shaurya35/BrainOp-Task
cd BrainOp-Task
```
2. cd to folder:

```bash
cd client
```

3. Install the dependencies:

```bash
npm install
```

4. cd to folder:

```bash
cd server
```

5. Install the dependencies:

```bash
npm install
```

5. Create .env file and Add:

```bash
PORT=<yourPortNumber>
MONGO_URI=<yourMongoUri>
JWT_SECRET=<yourJwt>
```

## Usage

Run the client:

```bash
npm run dev
```

Run the server:

```bash
npm run dev
```

Access the app in your web browser at `http://localhost:5173/`.

## Contributors

- Shaurya Jha ([Linkedin](https://www.linkedin.com/in/shaurya--jha/))

## Tasks

- Technology Stack:
- [x] Node.js and npm
- [x] Express.js or another suitable Node.js framework
- [x] A database of your choice (MongoDB, PostgreSQL, MySQL, etc.)
- [x] jsonwebtoken library for JWT generation and validation
- [x] Use React.js for component structure and functionality.

- Signup Screen:
- [x] Include fields for username/email, password (with confirmation), and optional fields like name and profile picture.
- [X] Implement validation for the required fields and email format using React state management and validation libraries.
- [x] Include terms and conditions checkbox.
- Display clear error messages and success messages.
- Simulate sending a welcome email notification upon successful signup (no actual email sending required).
- [x] Redirect to the post list screen after successful signup using React Router.

- General Requirements:

- Post list Screen:
- [x] There should be a screen where user can scroll infinitely and posts will be rendered using GET api of posts. 
- Implement responsive design using Tailwind.
- Ensure the screens are visually appealing and consistent with the "MelodyVerse" theme (design details left to your interpretation).
- [x] Submit your code as a zip file or a link to a public repository.

- API Endpoints:
- [x] POST /signup:
- [x] Registers a new user with provided username, email, and password.
- [x] Validates input, ensures unique usernames and emails, hashes passwords securely.
- [x] Stores user data in the database.
- [x] Returns a success message and JWT token upon successful registration.

- GET /posts:
- [x] Paginated implementation of fetching posts data from database.
- [x] Should be secure and non authenticated apis should be rejected. 

- JWT Implementation:
- [x] Generate JWT tokens with appropriate payload and expiration time upon successful login.
- [x] Validate JWT tokens in protected routes to ensure user authentication.
- [x] Implement robust token refresh mechanisms if desired.

- Best Practices:
- [x] Enforce input validation and sanitization to prevent vulnerabilities.
- Protect against common attacks like SQL injection and XSS.
- [x] Securely store passwords using strong hashing algorithms (bcrypt or Argon2).
- [x] Implement proper error handling and provide informative error messages.
- [x] Write clean, well-structured, and documented code.
- [x] Consider using environment variables for sensitive information.
- [x] Handle sessions and token expiration effectively.

- Bonus Points:
- Implement password reset functionality.
- Integrate email verification for signup.
- Add rate limiting to protect against brute force attacks.
- [x] Use middleware for authentication and authorization.
- Write unit tests for API endpoints.
- Implement social login options using mock APIs and React libraries.
- Add password visibility toggle.
- Use animations or microinteractions with React libraries like Framer Motion to enhance user experience.
- [x] Include accessibility features like alt text and keyboard navigation using ARIA attributes and focus management.
- Implement unit testing for your React components using Jest or similar libraries.


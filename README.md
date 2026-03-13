# Intro to Backend

A simple Node.js/Express API for learning backend basics: user registration, login, logout, and CRUD operations for posts.

## Tech Stack

- **Express** — HTTP server
- **MongoDB** (Mongoose) — Database
- **bcrypt** — Password hashing

## Prerequisites

- Node.js 18+
- MongoDB (local or cloud)

## Setup

1. Clone and install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```
   PORT=8000
   MONGODB_URI= YOUR_MONGODB_URI
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

   For production:

   ```bash
   npm start
   ```

## API Endpoints

### Users (`/api/v1/users`)

| Method | Endpoint    | Description   |
| ------ | ----------- | ------------- |
| POST   | `/register` | Register user |
| POST   | `/login`    | Login         |
| POST   | `/logout`   | Logout        |

### Posts (`/api/v1/posts`)

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/create`          | Create post   |
| GET    | `/getPosts`        | Get all posts |
| PATCH  | `/update/:id`      | Update post   |
| GET    | `/deletePosts/:id` | Delete post   |

## Project Structure

```
backend/src/
├── config/       # Database, constants
├── controllers/  # Route handlers
├── models/       # Mongoose schemas (User, Post)
├── routes/       # API routes
├── app.js        # Express app setup
└── index.js      # Server entry point
```

## Testing

Postman collections are available in `postman/collections/` for auth and CRUD requests.

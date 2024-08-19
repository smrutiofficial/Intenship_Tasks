// index.js
const express = require('express');
const connectDB = require('./db/connection');
// const authRoutes = require('./routers/auth.router'); // Import the auth routes
const app = express();
require('dotenv').config(); // Load environment variables

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Importing routers
const authRoutes = require('./routers/auth.router'); // Routes for registration and login
const userRoutes = require('./routers/user.router'); // Protected routes for user actions

// Define routes
app.use('/api/auth', authRoutes); // Use auth router (unprotected routes)
app.use('/api/user', userRoutes); // Use user router (protected routes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

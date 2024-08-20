const express = require('express');
const connectDB = require('./db/connection');
const authRoutes = require('./routers/auth.router'); 
const userRoutes = require('./routers/user.router'); 
const app = express();
require('dotenv').config(); 

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());


// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

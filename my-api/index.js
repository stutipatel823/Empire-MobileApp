// index.js

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const itemRoutes = require('./routes/items');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/items', itemRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

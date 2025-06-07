const express = require('express');
const mongoose = require('mongoose');
const booksRoute = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://admin1:iBook%40123@cluster0.kxgnyw7.mongodb.net/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

app.use(express.json());

// Defining routes
app.use('/api', booksRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

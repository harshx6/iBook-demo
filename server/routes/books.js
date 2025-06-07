const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// Route to add a book
router.post('/books', booksController.addBook);

module.exports = router;
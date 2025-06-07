const Book = require('../models/book');

exports.addBook = async (req, res) => {
  try {
    const { title, author, genre } = req.body;
    const newBook = new Book({ title, author, genre });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the book.' });
  }
};
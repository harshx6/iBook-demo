import React from 'react';
import { useParams } from 'react-router-dom';
import './BookDetail.css'; 
import { books } from './books';

const BookDetail = () => {
  const { id } = useParams();

  // Finding the selected book by ID
  const selectedBook = books.find((book) => book._id === id);

  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  // Importing the book image dynamically
  const bookImage = require(`./images/${selectedBook._id}.jpg`).default;

  return (
    <div className="container">
      <h2 className="title">Book Details</h2>
      <div className="image-container">
        <img src={bookImage} alt={selectedBook.title} />
      </div>
      <p className="label">Title: {selectedBook.title}</p>
      <p className="label">ISBN: {selectedBook.ISBN}</p>
      <p className="label">Author: {selectedBook.author}</p>
      <p className="label">Year: {selectedBook.year}</p>
      <p className="label">Genre: {selectedBook.genre}</p>
      <p className="label">Rating: {selectedBook.rating}</p>
      <p className="description">Description: {selectedBook.description}</p>
    </div>
  );
};

export default BookDetail;

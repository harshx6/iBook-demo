import { Link } from 'react-router-dom';
import { books } from './books';
import React from 'react';

//import '../data/books.json';
import "./BookList.css";


const BookList = () => {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      <div className="add-book-container">
        <Link to="/add-book" className="add-book-button">
          Add a Book
        </Link>
      </div>
      
      <ul>
        {books.map((book) => (
          <li key={book._id} className="book-item">
          <button className='book-link'>
            <Link to={`/book/${book._id}`}>{book.title} ({book.year}), by {book.author} </Link>
          </button>                        
          </li>
        ))}
      </ul>
      
      <div className="add-book-container">
        <Link to="/add-book" className="add-book-button">
          Remove a Book
        </Link>
      </div>
    </div>
  );
}

export default BookList;

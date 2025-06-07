import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';
import Rating from './components/Rating';
import Review from './components/Review';
import UserProfile from './components/UserProfile';
import { books } from './components/books';

const AppRouter = () => {

  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };
  
  return (
    
      <Routes>
        <Route path='/' exact element={<HomePage/>} />
        <Route path='/books' element={<BookList books={books}/>} />
        <Route path="/book/:id" element={<BookDetail/>} />
        <Route path="/add-book" element={<BookForm addBook={addBook}/>} />
        <Route path="/rate-book/:id" element={<Rating/>} />
        <Route path="/review-book/:id" element={<Review/>} />
        <Route path="/user-profile" element={<UserProfile/>} />
      </Routes>
    
  );
};

export default AppRouter;
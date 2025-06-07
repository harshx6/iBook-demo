import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './BookForm.css'; 
import { books } from './books';

const BookForm = ({addBook}) => {
  
  const [title, setTitle] = useState('');
  const [ISBN, setIsbn] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const newBook = {
      _id: (books.length + 1).toString(), // Generate a new unique ID
      title,
      ISBN,
      author,
      year,
      genre,
      rating,
      description,
    };
    
    // Call the addBook function passed from the parent component
    addBook(newBook);

    //navigate('/books');
  };

  return (
    <div className="book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" className="book-input" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" className="book-input" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <br />
        <label>
          ISBN:
          <input type="text" className="book-input" value={ISBN} onChange={(e) => setIsbn(e.target.value)} />
        </label>
        <br />
        <label>
          Year:
          <input type="text" className="book-input" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <br />
        <label>
          Genre:
          <input type="text" className="book-input" value={genre} onChange={(e) => setGenre(e.target.value)} />
        </label>
        <br />
        <label>
          Rating:
          <input type="text" className="book-input" value={rating} onChange={(e) => setRating(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" className="book-input" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit" className="add-book-button">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;

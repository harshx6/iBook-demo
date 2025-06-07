
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to My Book Catalog</h1>
      <p className="homepage-description">Manage your book collection with ease.</p>
      <div className="homepage-links">
        <Link to="/books" className="homepage-link">
          View Book List
        </Link>
        <Link to="/user-profile" className="homepage-link">
          Go to User Profile
        </Link>
        <Link to="/rate-book/:id" className="homepage-link">
          Rate a Book
        </Link>
        <Link to="/review-book/:id" className="homepage-link">
          Review a Book
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import AppRouter from './AppRouter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AppRouter />} />
      </Routes>
    </Router>
  );
}
export default App;
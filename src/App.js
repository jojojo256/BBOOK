// src/App.js 또는 src/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookDetailPage from './pages/BookDetailPage';
import RefundPage from './pages/RefundPage';

import OrderHistoryPage from './pages/OrderHistoryPage';
import ReRentPage from './pages/ReRentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="/re-rent/:bookId" element={<ReRentPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
        <Route path="/refund" element={<RefundPage />} />

      </Routes>
    </Router>
  );
}

export default App;







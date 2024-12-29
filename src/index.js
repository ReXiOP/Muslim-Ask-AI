import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18+
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'; // Use HashRouter if using routing

// Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

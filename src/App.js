// src/App.js
import React from "react";
import AskQuestion from "./components/AskQuestion";
import "./index.css";
import './input.css';
import Footer from './components/Footer';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Ask Muslim</h1>
        <ThemeSwitch />
      </header>
      <div className="flex-grow">
        <AskQuestion />
      </div>
      <Footer />
    </div>
  );
}

export default App;

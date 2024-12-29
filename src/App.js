import React from "react";
import AskQuestion from "./components/AskQuestion";
import Footer from './components/Footer';
import ThemeSwitch from './components/ThemeSwitch';
import './input.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <header className="p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Quran-Assistant</h1>
        <ThemeSwitch />
      </header>
      <main className="flex-grow">
        <AskQuestion />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// src/components/AskQuestionForm.js
import React, { useState } from "react";

const AskQuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question) {
      onSubmit(question);
      setQuestion(""); // Clear the input after submit
    }
  };

  return (
    <div className="ask-question-form">
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AskQuestionForm;

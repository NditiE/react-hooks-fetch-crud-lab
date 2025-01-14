import React, { useState } from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;
  const [selectedAnswer, setSelectedAnswer] = useState(correctIndex);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleSelectChange = (e) => {
    const newCorrectIndex = parseInt(e.target.value, 10);
    setSelectedAnswer(newCorrectIndex);
    onUpdate(id, newCorrectIndex);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label htmlFor={`correctAnswer_${id}`}>
        Correct Answer:
        <select
          id={`correctAnswer_${id}`}
          value={selectedAnswer}
          onChange={handleSelectChange}
        >
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

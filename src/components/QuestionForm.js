import React, { useState } from "react";

function QuestionForm({ onAddQuestion }) {
  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddQuestion(formData);
  
    setFormData({
      prompt: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      correctIndex: 0,
    });
  };

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">
          Prompt:
          <input
            type="text"
            name="prompt"
            id="prompt"
            value={formData.prompt}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="answer1">
          Answer 1:
          <input
            type="text"
            name="answer1"
            id="answer1"
            value={formData.answer1}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="answer2">
          Answer 2:
          <input
            type="text"
            name="answer2"
            id="answer2"
            value={formData.answer2}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="answer3">
          Answer 3:
          <input
            type="text"
            name="answer3"
            id="answer3"
            value={formData.answer3}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="answer4">
          Answer 4:
          <input
            type="text"
            name="answer4"
            id="answer4"
            value={formData.answer4}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="correctAnswer">
          Correct Answer:
          <select
            name="correctIndex"
            id="correctAnswer"
            value={formData.correctIndex}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4].map((index) => (
              <option key={index} value={index - 1}>
                {formData[`answer${index}`]}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;

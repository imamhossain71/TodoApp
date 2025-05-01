import React, { useState } from 'react';
import Style from './Newtodo.module.css'; // Import the CSS module

const Newtodo = (props) => {
  const [todo, setTodo] = useState({ title: '', description: '' }); // Initialize state for the todo item
  const { title, description } = todo; // Destructure the todo object

  const handleChange = (event) => {
    const { name, value } = event.target; // Get the name and value of the changed input
    setTodo((oldTodo) => ({
      ...oldTodo,
      [name]: value, // Update the todo state with the new value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    props.onAddTodo(todo); // Pass the todo object to the parent component
    setTodo({ title: '', description: '' }); // Reset the form fields
  };

  return (
    <form className={Style.form} onSubmit={handleSubmit}>
      <div className={Style['form-field']}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={Style['form-field']}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Newtodo;

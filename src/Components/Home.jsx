import React, { useState } from 'react';
import Todos from './Todos'; // Import the Todos component
import Newtodo from './Newtodo'; // Import the Newtodo component
import style from './Home.module.css'; // Import the CSS module
import { v4 as uuidv4 } from 'uuid'; // Correct import for uuidv4

const Home = () => {
  const [todos, setTodos] = useState([]); // Initialize state for todos

  const handleAddTodo = (todo) => {
    if (!todo.title || !todo.description) {
      alert('Please fill in both fields'); // Prevent adding empty todos
      return;
    }
    setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), ...todo }]); // Add new todo to the list
  };
const handleRemoveTodo = (id) => {
  const filteredTodos = todos.filter((todo) => todo.id !== id); // Filter out the todo to be deleted
 // setTodos(filteredTodos); // Update the state with the remaining todos
 setTodos((prevTodos) =>{prevTodos.filter((todo) => todo.id !== id);
  return filteredTodos;
  
 } ); // Update the state with the remaining todos
  alert('Todo deleted successfully'); // Show success message
}
  return (
    <div className={style.container}>
      <h1 style={{ color: 'white' }}>My Todos</h1>
      <Newtodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;

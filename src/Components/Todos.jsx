import React from 'react';
import Todo from './Todo'; // Import the Todo component
import Style from './Todos.module.css'; // Import the CSS module

const Todos = (props) => {
  if (!props.todos || props.todos.length === 0) {
    return <p style={{ color: 'white' }}>No todos available. Add some!</p>; // Handle empty todos
  }

  return (
    <section className={Style.todos}>
      {props.todos.map((todo) => (
        <Todo todo={todo} key={todo.id} id={todo.id}  onRemoveTodo={props.onRemoveTodo} /> // Pass the entire todo object
      ))}
    </section>
  );
};

export default Todos;

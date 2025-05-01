import React from 'react';
import Style from './Todo.module.css'; // Import the CSS module

const Todo = (props) => {
  const { title, description } = props.todo; // Access title and description from the todo object
  const { id} = props;
  const handleClick = (id) => {
    //props.onDeleteTodo(props.todo.id); // Call the delete function passed from the parent
    props.onRemoveTodo(id); // Placeholder for delete action
  }
  return (
    <article className={Style.todo}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <button className={Style.btn} onClick={()=> handleClick(id)}>
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;

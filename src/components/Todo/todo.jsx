import React from 'react';
import './todo.css';

const Todo = (props) => {
  const { todo, updateTodo, deleteTodo } = props;
  return (
    <div className={todo.done ? "todo todo--done" : "todo" }>
      <h2>{todo.title}</h2>
      <button onClick={() => updateTodo(todo.id)}>{ todo.done ? 'Not Done' : 'Done'}</button>  
      {todo.done ? <button onClick={() => deleteTodo(todo.id)}>Delete</button> : null }
    </div>
  );
}

export default Todo;

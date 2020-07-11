import React from 'react';
import Todo from '../Todo/todo';
import './board.css';

const Board = (props) => {
  const { todoItems, updateTodo, deleteTodo } = props;
  return (
    <div className="Board">
      <h1>My Todos</h1>
        <div className="todos">
          {
            todoItems.map((todo, index) =>
              <Todo todo={todo} key={index} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            )
          }
        </div>
    </div>
  );
}

export default Board;

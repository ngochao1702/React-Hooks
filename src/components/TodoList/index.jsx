import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  return (
    <div className="border border-info text-center">
      <h1 className="bg-primary">List Hobbit</h1>
      <ul className="todo-list list-group">
        {todos.map(todo => (
          <li
            className="list-group-item"
            key={todo.id}
            onClick={() => handleClick(todo)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default TodoList;
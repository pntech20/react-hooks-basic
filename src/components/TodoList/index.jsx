import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.array,
  onClickTodo: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onClickTodo: null
}

function TodoList(props) {
  const { todos, onClickTodo } = props;

  function handleClick(todo) {
    if (onClickTodo) {
      onClickTodo(todo)
    }
  }
  return (
    <>
      <h3>Click the items, they will disappear.</h3>
      <ul className="todo-list">
        {
          todos.map(todo => (
            <li
              onClick={() => handleClick(todo)}
              key={todo.id}
            >{todo.title}</li>
          ))
        }
      </ul>
    </>
  );
}

export default TodoList;
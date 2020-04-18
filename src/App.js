import React, { useState } from 'react';
import './App.scss';
// import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Something awesome! 🥰' },
    { id: 2, title: 'Something great! 😎' },
    { id: 3, title: 'Something amazing! 😚' }
  ])

  function handleClickTodo(todo) {
    const index = todoList.findIndex(i => i.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);

    setTodoList(newTodoList);
  }

  function handleAddTodo(values) {
    const newTodoList = [...todoList];

    const newTodo = {
      id: newTodoList.length + 1,
      ...values
    };

    newTodoList.push(newTodo);

    setTodoList(newTodoList)
  }

  return (
    <div className="app">
      <h1>Hello React Hooks</h1>
      {/* <ColorBox /> */}
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList todos={todoList} onClickTodo={handleClickTodo} />
    </div>
  );
}

export default App;

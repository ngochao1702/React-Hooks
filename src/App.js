import React, {useState} from 'react';
import ChangeToMoney from './components/ChangeMoney/index';
import TodoList from './components/TodoList/index';
import TodoForm from './components/TodoForm/index';



App.propTypes = {
  
};

function App() {
  const [ todoList, setTodoList ] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
   ]
   );

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id = todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log(formValues);

    // add todo list
    const newTodo = {
      id: todoList.length +1,
      ...formValues,

    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);

  }

  return (
    <div className="App">
      
      
      <h1>React Hooks - TodoList</h1>

      <TodoList todos={ todoList } onTodoClick={ handleTodoClick } />

      <TodoForm  onSubmit={ handleTodoFormSubmit } />
    </div>

  );
}

export default App;
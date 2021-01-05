import React, { useEffect, useState } from "react";
import queryString from 'query-string'


import ChangeToMoney from "./components/ChangeMoney/index";
import TodoList from "./components/TodoList/index";
import TodoForm from "./components/TodoForm/index";
import PostList from "./components/PostList";
import Pagination from "./components/Paginantion";

App.propTypes = {};

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  const [ pagination, setPagination ] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
  });

  const [ filters, setFilters ] = useState({
    _page: 10,
    _limit: 5,
  });

  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl =
          `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("failed to fetch post list:", error.message);
      }
    }

    fetchPostList();
  }, [filters]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => (x.id = todo.id));
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log(formValues);

    // add todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handlePageChange(newPage) {
    console.log('new page', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  return (
    <div className="App">
      <h1>React Hooks - TodoList</h1>
      <PostList posts={postList} />

      <Pagination 
        pagination={ pagination }
        onChangePage={ handlePageChange }

      
       />

      {/* <TodoList todos={ todoList } onTodoClick={ handleTodoClick } />

      <TodoForm  onSubmit={ handleTodoFormSubmit } /> */}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import queryString from 'query-string';
import axios from 'axios';


import ChangeToMoney from "./components/ChangeMoney/index";
import TodoList from "./components/TodoList/index";
import TodoForm from "./components/TodoForm/index";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFiltersForm from "./components/PostFiltersForm";
import GetApi from './components/GetApi'
import Clock from './components/Clock'
import Game from './components/Caro'

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

  function handleSearchTerm(event) {
    console.log(event);
    setFilters({
      ...filters,
      _page: 1,
      title_like: event.searchTerm,
    });
  }

  const [ showClock, setShowClock ] = useState(true);

  return (
    <div className="App">


      <Game />


      {/* end reacthooks */}

      {/* <h1>React Hooks - TodoList</h1> */}
      {/* <GetApi /> */}
      {/* { showClock && <Clock /> }
      <button
        onClick={ () => setShowClock(false) }
      >Hide Clock</button> */}
      {/* <PostFiltersForm onSubmit={ handleSearchTerm } />
      <PostList posts={postList} />

      <Pagination 
        pagination={ pagination }
        onChangePage={ handlePageChange }

      
       /> */}

      {/* <TodoList todos={ todoList } onTodoClick={ handleTodoClick } />

      <TodoForm  onSubmit={ handleTodoFormSubmit } /> */}
    </div>
  );
}

export default App;

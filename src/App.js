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
    _totalRows: 1,
  });

  const [ filters, setFilters ] = useState({
    _page: 1,
    _limit: 5,
  });
 const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://gist.githubusercontent.com/ngochao1702/2c741806070995e03c86f9cfc4a98da5/raw/505c21e4c83eb97d40842b4d23af99acd7f27d02/gistfile1.txt"
      );
      // const table = result.data
      // console.log(table)
      setBooks(result.data);
    };
    fetchData();
  }, []);
 
  

  // const [postList, setPostList] = useState([]);
  // useEffect(() => {
  //   async function fetchPostList() {
  //     try {
  //       const paramString = queryString.stringify(filters);
  //       const requestUrl =
  //         `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
  //       const response = await fetch(requestUrl);
  //       const responseJSON = await response.json();
  //       console.log({ responseJSON });
  //       const { data, pagination } = responseJSON;
  //       setPostList(data);
  //       setPagination(pagination);
  //     } catch (error) {
  //       console.log("failed to fetch post list:", error.message);
  //     }
  //   }

  //   fetchPostList();
  // }, [filters]);

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
    <div className="App border border-success p-4 w-75">


      {/* <Game /> */}


      {/* end reactHooks */}

      <h1
        className="border border-info text-info w-50 text-center"
      >React Hooks - TodoList</h1>
      <GetApi list ={ books }/>
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

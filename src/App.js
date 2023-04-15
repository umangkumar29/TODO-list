import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponents/Header";
import { Footor } from "./myComponents/Footor";
import { Todos } from "./myComponents/Todos";
import { AddTodo } from "./myComponents/AddTodo";
import { About } from "./myComponents/About";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([]);
  let initTodo;

  const onDelete = (todo) => {
    console.log("i am delete todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos?.length === 0) sno = 0;
    else sno = todos[todos?.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    if (!localStorage.getItem("todos")) {
      initTodo = [];
    } else {
      initTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(initTodo);
    }
  }, []);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true} />
        <Routes>
        <Route exact path="/" element={
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </>
        }>
          </Route>
          <Route  path="/about" element={<About/>}/>

        </Routes>
        
        <Footor />
      </Router>
    </>
  );
}

export default App;

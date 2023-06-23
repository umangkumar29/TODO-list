import React from 'react'
import {TodoItem} from "./TodoItem";
import "./Todos.css"

export const Todos = (props) => {
  return (
    <div className="container-2">
      <h3 className='text-center my-3'>Todos list</h3>
      <div className='cont'>
      {props.todos.length===0? "No todos to display" :
      props.todos.map((todo)=>{
        return (
          <>
        <TodoItem key = {todo.sno} todo ={todo} onDelete = {props.onDelete} />
        <hr/>
        </>
        )
      })}
      </div>
     
      
    </div>
  )
}

export default Todos

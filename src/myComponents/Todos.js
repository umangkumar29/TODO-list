import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='text-center my-3'>Todos list</h3>
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
  )
}

export default Todos
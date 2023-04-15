import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
    const [ title , setTitle] = useState("");
    const [ desc , setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title ot deacription cannot be empty");
        }
        else{
        addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
     }


  return (
    <div className="container">
        <h3 className='text-center my-3' > Add a todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            TODO TITLE
          </label>
          <input
            type="text"
            value={title}
            onChange = {(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>


        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            TODO DESCRIPTION
          </label>
          <input
            type="text"
            value={desc}
            onChange = {(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>


        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;


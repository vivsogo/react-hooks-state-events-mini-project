import React from "react";
import { useState } from "react/cjs/react.development";
import { Component } from "react/cjs/react.production.min";

function NewTaskForm({categories, handleTaskAdd}) {
  //const[text,setText]=useState("");
  //const[category,setCategory]=useState(categories[0]);
  const[formData, setFormData]= useState({text:"",category:categories[0]});
  
 
  function handleOnChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  function handleSubmit(event){
    event.preventDefault();
    handleTaskAdd(formData)
  }
  const optionElements= categories.map(category=>{
    return <option key={category}>{category}</option>
  });
  return (
    <form onSubmit={handleSubmit}className="new-task-form">
      <label>
        Details
        <input onChange={handleOnChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleOnChange}name="category">
          {/* render <option> elements for each category here */}
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

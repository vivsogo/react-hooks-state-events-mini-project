import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
//upper case varibles means unchanging vaules   
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksStateArray, settasksStateArray] = useState (TASKS);
  const [selectedCategory , setselectedCategory ] = useState ("All");
  
  function handleTaskDelete(text) {
      const newTaskArray= tasksStateArray.filter((task)=> task.text !== text );
      settasksStateArray(newTaskArray);
  }

  function handleClickCategory(newSelectedCategory){ 
    setselectedCategory(newSelectedCategory)
  }
  function handleTaskAdd(newTask){
    const newTaskArray=[...tasksStateArray,newTask]
    settasksStateArray(newTaskArray);
  }
  const filteredTask = tasksStateArray.filter((task)=> {
    if (selectedCategory === "All") {
     return true;
    } else {
       return task.category !== selectedCategory;
     }
   
   
  });
    

   
  return (
    <div className="App">  
      <h2>My tasks</h2>
      <CategoryFilter  
       categories={CATEGORIES}
       handleClickCategory={handleClickCategory}
       selectedCategory={selectedCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES.filter(cat => cat!=="All")}
      handleTaskAdd={handleTaskAdd}
      />
      <TaskList 
       tasks={filteredTask} 
       deleteTask={handleTaskDelete}/>
    </div>
  );
 
}

export default App;
  
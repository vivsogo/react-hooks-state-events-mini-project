import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask}) {
  //make this array into jsk elements
  const tasksArray= tasks.map((task, index)=>{
    return <Task 
     key={index} 
     text= {task.text} 
     category={tasks.category}
     onDeleteTask={deleteTask}

    />
  });

  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksArray}
    </div>
  );
}

export default TaskList;
 
import React, { useState } from "react";


export default function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take A Shower",
    "Walk The Dog",
  ]);


  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if(newTask.trim() !== ""){

        setTasks(t => [...t, newTask]);
        setNewTask("")

    }
     

  }

  function deleteTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)

  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTask = [...tasks];
      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];
      setTasks(updateTask);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTask = [...tasks];
      [updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ];
      setTasks(updateTask);
    }
  }

  return (
    <>
    
    
    <div className="to-do-list-wrapper">

    <div className="to-do-list">
        <h1 className="to-do-list-header">To Do list</h1>

        <div>
          <input
            className="task-input"
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
          ></input>
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>


        <ol className="list-item">
          {tasks.map((task, index) => (

            <li key={index}>  <span className="text"> {task} </span> 
            
            
            <button className='delete-button' onClick={() => deleteTask(index)}> Delete </button>
            <button className='move-button' onClick={() => moveTaskUp(index)}> Up </button>
            <button className='move-button' onClick={() => moveTaskDown(index)}> Down </button>
             </li>
           
            
          ))}
         
          
        </ol>
      </div>

    </div>
     
      
    </>
  );
}

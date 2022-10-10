import './App.css';
import React, {useState} from 'react';



function App() {

  const [tasks, setTasks] = useState ([
    { name: "Buy Shopping", priority: "low-priority" },
    { name: "Clean Bathroom", priority: "high-priority"},
    { name: "Car's MOT", priority: "high-priority"}
  ]);

  const [newTask, setNewTask] = useState ("")
  
  const taskNodes = tasks.map((task, index) => {
    return (
      <li key = {index} className = {task.priority ? check : uncheck}>
        <span>{task.name}</span>
        {task.priority ? <span className="priority"></span> : <button onClick= {() => addNewTask(index)}>
        </button>}
        <input type="radio" name="high-priority" id="high-priority">high-priority</input>
        <input type="radio" name="low-priority" id="low-priority">low-priority</input></li>
    )

  });



const check = (event) => { 
  tasks.getElementById("high-priority").checked = true;
};

const uncheck = (event) => {
  tasks.getElementById("low-priority").checked = false;
};


const handleTaskInput = (event) => {
  setNewTask(event.target.value)
}

const saveNewTask = (event) => {
  event.preventDefault();
  const copyTasks = [...tasks]
  copyTasks.push({name: newTask, priority: "high-priority"})
  setTasks(copyTasks)
  setNewTask("")
};

const addNewTask = (index) => {
  const copyTasks = [...tasks]
  copyTasks[index].priority = "high-priority";
  setTasks(copyTasks)
}

return (
  <div className="App">

    <h1> ToDo List</h1>
    

    <form onSubmit={saveNewTask}>
      <label htmlFor = "new-task"> Add new Task:</label>
      <input id="new-task" type = "text" value = {newTask} onChange={handleTaskInput}/>
      <input type = "submit" value = "save new task" />
    </form>

    <ul> {taskNodes}

    </ul>
    
  </div>
);
}

export default App;

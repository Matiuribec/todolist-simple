import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask(e) {
    if (e.code == "Enter" && newTask != "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
	var newTasks = [...tasks]
    newTasks.splice(index, 1)
	setTasks(newTasks)
  }
  return (
    <div className="Papel container text-center">
      <h1>To-Do List</h1>
      <div className="Lista d-flex justify-content-center">
        <ul className="list-group list-group-flush">
          <li class="list-group-item">
            <input
              className="form-control"
              type="text"
              onKeyDown={(e) => addTask(e)}
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
              name="task"
              id="task"
            ></input>
          </li>

          {tasks.map((task, index) => (
            <li className="list-group-item">{task}
			<button className=" bg-primary rounded-pill ms-5" onClick={()=> removeTask(index)}>X</button>
			</li>
          ))}

          <li className="list-group-item text-muted">
            <small>{tasks.length} items</small>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

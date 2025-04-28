import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available</p> // Display a message if no tasks exist
      ) : (
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default TaskList;

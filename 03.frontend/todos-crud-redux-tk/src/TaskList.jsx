import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  deleteTask,
  updateTask,
  clearAllTasks,
  fetchTasks
} from "./store/slice/taskSlice";

const TaskList = () => {

  /*
    useSelector:
    - Used to read data from Redux store
    - state.tasks comes from the key defined in configureStore
  */
  const tasks = useSelector((state) => state.tasks);

  /*
    useDispatch:
    - Used to send actions to Redux store
  */
  const dispatch = useDispatch();

  /*
    Local component state for form inputs
    - newTaskTitle: stores task title input
    - newTaskCompleted: stores checkbox value
  */
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskCompleted, setNewTaskCompleted] = useState(false);

  /*
    useEffect:
    - Runs when component mounts
    - Dispatches async action to fetch tasks from API
  */
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  /*
    handleAddTask:
    - Creates a new task object
    - Dispatches addTask action to Redux store
    - Resets local form state after adding task
  */
  const handleAddTask = () => {
    if (newTaskTitle.trim() !== "") {
      const payload = {
        id: Date.now(),           // generate unique id
        title: newTaskTitle,
        completed: newTaskCompleted
      };

      dispatch(addTask(payload));

      // reset form values
      setNewTaskCompleted(false);
      setNewTaskTitle("");
    }
  };

  /*
    handleDeleteTask:
    - Dispatches deleteTask action with task id
  */
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  /*
    handleClearAllTasks:
    - Removes all tasks from Redux store
  */
  const handleClearAllTasks = () => {
    dispatch(clearAllTasks());
  };
    return (
    <div className={"task-container"}>
      <h2>
        Task List
        <button onClick={handleClearAllTasks}>Clear All Tasks</button>
      </h2>
      <input
        type={"text"}
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Enter new task title"
      />
      <label>
        Completed:
        <input
          type={"checkbox"}
          checked={newTaskCompleted}
          onChange={(e) => setNewTaskCompleted(e.target.checked)}
        />
      </label>
      <button onClick={handleAddTask}>Add Task</button>
      <hr />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            {task.completed ? " ✅︎" : " ❌"}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

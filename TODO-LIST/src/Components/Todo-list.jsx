import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  };

  const handleSaveTask = (index) => {
    const updatedTasks = tasks.map((item, i) =>
      i === index ? editTask : item
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTask("");
  };

  const handleEditInputChange = (e) => {
    setEditTask(e.target.value);
  };

  return (
    <section className="todo-container w-[50vw] flex items-center h-[50vh] flex-col">
      <header>
        <h1 className="text-6xl font-serif uppercase mt-10">Todo List</h1>
      </header>
      <section className="form">
        <form onSubmit={handleAddTask}>
          <div className="border-[2px] border-black w-full mt-10 px-6 py-2 flex items-center justify-between gap-10">
            <input
              type="text"
              className="todo-input px-6 py-2 rounded-md outline-4"
              autoComplete="off"
              placeholder="Type a task..."
              value={task}
              onChange={handleInputChange}
            />
            <button
              className="px-6 py-2 hover:bg-blue-700 hover:text-white bg-blue-500 rounded-full outline-none"
              type="submit"
            >
              ADD TASK
            </button>
          </div>
        </form>
      </section>

      <div className="w-[70%] h-full mt-5 ">
        <ul className="w-full">
          {tasks.map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-between p-4 mb-2 bg-gray-100 rounded-lg shadow-md"
            >
              {editIndex === i ? (
                <input
                  type="text"
                  value={editTask}
                  onChange={handleEditInputChange}
                  className="px-2 py-1 w-full"
                />
              ) : (
                <h4>{item}</h4>
              )}
              <div className="icons flex items-center justify-center gap-2">
                {editIndex === i ? (
                  <button
                    className="bg-green-400 p-2 rounded-full"
                    onClick={() => handleSaveTask(i)}
                  >
                    <MdDone />
                  </button>
                ) : (
                  <button
                    className="bg-green-400 p-2 rounded-full"
                    onClick={() => handleEditTask(i)}
                  >
                    <MdDone />
                  </button>
                )}
                <span
                  className="bg-red-500 p-2 rounded-full cursor-pointer"
                  onClick={() => handleDeleteTask(i)}
                >
                  <RiDeleteBinFill />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Todo;

import React from "react";
const Todo = () => {
  return (
    <section className=".todo-container w-[50vw] flex items-center  h-[50vh] flex-col ">
      <header>
        <h1 className="text-6xl font-serif uppercase mt-10">Todo List</h1>
      </header>
      <section className="form">
        <form>
          <div className="border-[2px] border-black w-full mt-10 px-6 py-2 flex items-center justify-between gap-10">
            <input type="text" className="todo-input px-6 py-2 rounded-md outline-4 " autoComplete="off" placeholder="type.." />
            <button className="px-6 py-2 bg-blue-500 rounded-full outline-none" type="submit">
              ADD TASK
            </button>
          </div>
          <div>
        
          </div>
        </form>
      </section>
    </section>
  );
};

export default Todo;

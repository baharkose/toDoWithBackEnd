import React, { useState } from "react";
import ToDoInput from "../components/ToDoInput";
import TodoList from "../components/TodoList";

const Home = () => {
  const [btnToogle, setBtnToogle] = useState(false);

  const handleToggle = () => {
    setBtnToogle(!btnToogle);
  };
  return (
    <div className="h-screen flex  justify-center  bg-red-50 pt-32">
      <div className="flex bg-red-50 pt-10 items-center flex-col space-x-16 border-2 gap-3 space-x-0 p-2 min-w-96">
        <h2 className="text-orange-700 text-4xl">TASK TRACKER</h2>

        <button
          onClick={handleToggle}
          className="bg-red-600 pr-16 pl-16 pt-3 pb-3 text-white rounded-md"
        >
          {btnToogle ? "Hide Task Bar" : "Show Task Bar"}
        </button>
        {btnToogle && <ToDoInput />}
        {btnToogle && <TodoList />}
      </div>
    </div>
  );
};

export default Home;

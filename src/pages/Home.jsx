import React from "react";
import ToDoInput from "../components/ToDoInput";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div>
      <h2>TASK TRACKER</h2>
      <ToDoInput />
      <TodoList />
    </div>
  );
};

export default Home;

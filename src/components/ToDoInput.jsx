import React, { useState } from "react";
import { useDispatch } from "react-redux";
// burada tanımladığımız reducerımızı çağırdık. Add işlemi için
import { addTodo } from "../features/todoReducer";

const ToDoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // sonra bir dispatch yayınladık ki state değişsin
    dispatch(addTodo(text));
    setText("");
  };

  console.log(text);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default ToDoInput;

import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ToDoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
      </form>
    </>
  );
};

export default ToDoInput;

import { useState } from "react";

const TodoFrom = () => {
  const [todo, setTodo] = useState("");
  const changeHandle = (e) => {
    setTodo(e.target.value);
  };

  const clickHandler = () => {
    console.log("Todo Form");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // add todo to todos
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={todo} onChange={changeHandle} />
      <button onClick={clickHandler} type="submit">
        {" "}
        Add{" "}
      </button>
    </form>
  );
};

export default TodoFrom;

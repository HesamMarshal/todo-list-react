import { useState } from "react";

const TodoFrom = (props) => {
  const [input, setInput] = useState("");
  const changeHandle = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // add input to todos
    if (!input) {
      alert("Enter todo");
      return;
    }
    props.addToDoHandler(input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={input} onChange={changeHandle} />
      <button type="submit"> Add </button>
    </form>
  );
};

export default TodoFrom;

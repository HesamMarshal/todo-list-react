import { useState } from "react";

const TodoFrom = (props) => {
  const [input, setInput] = useState("");
  const changeHandle = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = () => {
    console.log("Todo Form");
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
      <button onClick={clickHandler} type="submit">
        {" "}
        Add{" "}
      </button>
    </form>
  );
};

export default TodoFrom;

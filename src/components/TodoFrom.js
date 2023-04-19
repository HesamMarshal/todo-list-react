import { useEffect, useRef, useState } from "react";

const TodoFrom = (props) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
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
    props.submitTodo(input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <input
            type="text"
            value={input}
            onChange={changeHandle}
            placeholder="Update todo ..."
            ref={inputRef}
          />
          <button type="submit"> Update </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={input}
            onChange={changeHandle}
            placeholder="add todo ..."
            ref={inputRef}
          />
          <button type="submit"> Add </button>
        </>
      )}
    </form>
  );
};

export default TodoFrom;

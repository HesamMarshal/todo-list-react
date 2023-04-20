import { useEffect, useRef, useState } from "react";

const TodoFrom = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
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
      <div className="formControl">
        <input
          type="text"
          value={input}
          onChange={changeHandle}
          placeholder={props.edit ? "Update todo" : "Add new todo"}
          ref={inputRef}
        />
        <button
          type="submit"
          className={props.edit ? "button update" : "button add"}
        >
          {props.edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoFrom;

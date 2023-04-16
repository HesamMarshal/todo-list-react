import { useState } from "react";
import TodoFrom from "./TodoFrom";
import TodoList from "./TodoList";

const TodoApp = () => {
  // todos state
  const [todos, setTodos] = useState([]);
  const addToDoHandler = (input) => {
    console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };
  return (
    <div className="container">
      <TodoFrom addToDoHandler={addToDoHandler} />
      <TodoList />
    </div>
  );
};

export default TodoApp;

import { useState } from "react";
import TodoFrom from "./TodoFrom";
import TodoList from "./TodoList";

const TodoApp = () => {
  // todos state
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <TodoFrom />
      <TodoList />
    </div>
  );
};

export default TodoApp;

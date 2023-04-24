import { useEffect, useState } from "react";
import TodoFrom from "./TodoFrom";
import TodoList from "./TodoList";
import NavBar from "./NavBar";

const TodoApp = () => {
  // todos state
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, SetFilteredTodos] = useState([]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);
  const completeTodo = (id) => {
    const index = todos.findIndex((t) => t.id === id);

    // clone : To do not  mutate
    const completedTodo = { ...todos[index] };
    completedTodo.isCompleted = !completedTodo.isCompleted;

    // clone : todos
    const updatedTodos = [...todos];
    updatedTodos[index] = completedTodo;
    setTodos(updatedTodos);
  };

  const deleteHandler = (id) => {
    // approach 1
    const index = todos.findIndex((t) => t.id === id);
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);

    // Approach 2

    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, newValue) => {
    console.log(id, newValue);
    const index = todos.findIndex((t) => t.id === id);
    // clone : To do not  mutate
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;

    // clone : todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    console.log(status);
    switch (status) {
      case "all":
        SetFilteredTodos(todos);
        break;
      case "completed":
        SetFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "unCompleted":
        SetFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        SetFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    filterTodos(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <div className="container">
      <NavBar
        todos={filteredTodos}
        filterTodos={filterTodos}
        status={status}
        onSelect={selectHandler}
      />
      <TodoFrom submitTodo={addTodo} />

      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={deleteHandler}
        onUpdate={updateTodo}
      />
    </div>
  );
};

export default TodoApp;

// 1 react-select
// 2 all, uncompleted, completed

import { useState } from "react";
import TodoFrom from "./TodoFrom";
import TodoList from "./TodoList";

const TodoApp = () => {
  // todos state
  const [todos, setTodos] = useState([]);
  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

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
  return (
    <div className="container">
      <TodoFrom submitTodo={addTodo} />

      <TodoList
        todos={todos}
        onComplete={completeTodo}
        onDelete={deleteHandler}
        onUpdate={updateTodo}
      />
    </div>
  );
};

export default TodoApp;

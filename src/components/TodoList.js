const TodoList = ({ todos }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <p>add some todos</p>;

    return todos.map((todo) => {
      return (
        <div key={todo.id}>
          <div>{todo.text}</div>
          <div>
            <button>Edit</button>
            <button>Complete</button>
          </div>
        </div>
      );
    });
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;

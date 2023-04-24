import Select from "react-select";

const NavBar = ({ todos, selectedOption, onChange }) => {
  const numCompletedTodos = todos.filter((t) => t.isCompleted).length;
  const numUncompletedTodos = todos.filter((t) => !t.isCompleted).length;

  const options = [
    { value: "all", label: "All" },
    { value: "completed", label: "Completed" },
    { value: "unCompleted", label: "UnCompleted" },
  ];

  if (todos.length <= 0) return <h2>Set Your today todos</h2>;

  return (
    <header>
      <article>
        <h2>Total Tasks: </h2>
        <span>{todos.length}</span>
      </article>
      <article>
        <h2>Completed:</h2>
        <span>{numCompletedTodos}</span>
      </article>
      <article>
        <h3>Uncompleted:</h3>
        <span>{numUncompletedTodos}</span>
      </article>

      <Select
        onChange={onChange}
        options={options}
        value={selectedOption}
        className="select"
      />
      {/* <select onChange={onSelect} value={status}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="unCompleted">UnCompleted</option>
      </select> */}
    </header>
  );
};

export default NavBar;

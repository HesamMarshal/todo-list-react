const NavBar = ({ todos }) => {
  return (
    <header>
      <article>
        <h2>Total Tasks: </h2>
        <span>{todos.length}</span>
      </article>
      <article>
        <h2>Completed:</h2>
        <span>{todos.filter((t) => t.isCompleted).length}</span>
      </article>
      <article>
        <h3>Uncompleted:</h3>
        <span>{todos.filter((t) => !t.isCompleted).length}</span>
      </article>
    </header>
  );
};

export default NavBar;

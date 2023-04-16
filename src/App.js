import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <h1>TodoList App</h1>
      <TodoApp />
    </div>
  );
}

export default App;

//  TodoApp: state => todos
//      TodoForm => input + button => add item to state
//      TodoList => iterate over state

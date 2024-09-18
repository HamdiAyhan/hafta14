import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";


function App() {
  return (
    <div className="App">
<h1>To Do App</h1>
<AddTodoForm/>
<TodoList/>
<TotalCompleteItems/>
    </div>
  );
}

export default App;

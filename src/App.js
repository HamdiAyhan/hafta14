import {useDispatch} from 'react-redux';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { useEffect } from 'react';
import {todosDoldur} from './redux/todoSlice';

function App () {
  const vekilFonksiyon = useDispatch ();


      async function verial () {
      const istek = await fetch ('https://jsonplaceholder.typicode.com/todos');
      const veri = await istek.json ();
      vekilFonksiyon (todosDoldur ({veri: veri.slice (0, 20)}));
    }
    verial ();

 
 
 
  return (
    <div className="App">
      <h1>To Do App</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;

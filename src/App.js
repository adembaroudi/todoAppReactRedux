
import './App.css';
import AddTask from './components/AddTask';
import ListTask from "./components/ListTask";
import { useSelector } from 'react-redux';
import { selectTodoList } from './redux/reduxSlicer';
import {useState} from 'react'

function App() {
  const todoList = useSelector(selectTodoList);
 
  const [filter, setFilter] = useState('All')
  const displayFilter = (e) => {
    switch (e.target.value) {
      case 'Done': setFilter('Done');
        break;
      case 'unDone': setFilter('unDone');
        break;
      default: setFilter('All')
    }
  }
  return (
    <div className="App">
   
      <AddTask />
      <div className="select-status__styling">
        <h6>Filter by status</h6>

        <select name="#" id="select__styling" onChange={displayFilter}>

          <option value="All">All</option>
          <option value="Done">Done</option>
          <option value="unDone">unDone</option>
        </select>
      </div>

      {(filter === 'Done') ?
        todoList
          .filter(todo => todo.done === true)
          .map(el => {
            return (<ListTask
              key={el.id}
              item={el.item}
              done={el.done}
              id={el.id}
            />)
          }) :
        (filter === 'unDone') ?
          todoList
            .filter(todo => todo.done === false)
            .map(el => {
              return (<ListTask
                key={el.id}
                item={el.item}
                done={el.done}
                id={el.id}
              />)
            }) :

          todoList
            .map(el => {
              return (<ListTask
                key={el.id}
                item={el.item}
                done={el.done}
                id={el.id}
              />)
            }
            )}
    </div>
  );
}

export default App;

import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  
  const inputRef = useRef();

  const HandleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = {completed : false , text}
    if (text.length <= 0) {
      return;
    } else {
      setTodos([...todos, newItem]);
      inputRef.current.value = "";
    }
  }
  
  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

  }

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className='to-do-container'>
      <ul>
        {todos.map(({text , completed} , index) => {
          return (
            <div className='todos'>
            <li className={completed ? "done" : ""} key={index} onClick={() => {
              handleItemDone(index)
              }}>{text}
              </li>
              <span className='deleteItem' onClick={() => handleDeleteItem(index)}>✖️</span>
            </div>
              )
        })}
        </ul>
        <div className='AddItems'>
      <input ref={inputRef} placeholder='Enter item ...' />
      <button onClick={HandleAddTodo}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;

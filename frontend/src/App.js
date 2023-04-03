import './App.css';
import { useState, useEffect } from 'react'
import Todo from './components/Todo';
import { addTodo, getAllToDo,updateTodo,deleteTodo } from './utils/HandleApi'

function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className='container'>

        <h1>Todo App</h1>

        <div className='top'>
        <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className='add' onClick={isUpdating ? ()=> updateTodo(toDoId, text, setToDo, setText, setIsUpdating)
            :() => addTodo(text, setText, setToDo)}>
            {isUpdating ? "Updating" : "Add"}
          </div>
        </div>

        <div className='list'>
          {toDo.map((item) => <Todo key={item._id} text={item.text}  updateMode = {() => updateMode(item._id, item.text)} deleteTodo = {() => deleteTodo(item._id, setToDo)}  />)}
        </div>

      </div>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Gif from "./Gif";
import Nav from "./Nav";
import ToDoList from "./ToDoList";

const local_storage_key = "todoApp.todos"

function App() {
  const [toDos, setToDos] = useState([]);
  const toDoNameRef = useRef();
 

  useEffect(() => {
    
    const storeToDos = JSON.parse(localStorage.getItem(local_storage_key))
    if (storeToDos) return setToDos(storeToDos);
  }, [])

  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(toDos))
  }, [toDos]);

  function toggleToDo(title) {
    const newToDoList = [...toDos];
    const toDo = newToDoList.find((todo) => todo.title === title);
    toDo.completed = !toDo.completed;
    setToDos(newToDoList);
  }

  function handleAddToDo(e) {
    const title = toDoNameRef.current.value;
    if (title === "") return console.log(title);
    setToDos(previousToDo => {
      return [...previousToDo, {id: previousToDo + 1, title: title, completed: false}]
    });
    toDoNameRef.current.value = null;
  };

  const handleClearToDos = () => {
    const newToDos = toDos.filter((todo) => !todo.completed);
    setToDos(newToDos);
  }
  return (
    <div className="App">
      <Nav />
      <Gif /> 
      
      <h2>Create New Task</h2>
      <input ref={toDoNameRef} type="text" />
        <button onClick={handleAddToDo}>Add Task</button>
        <button onClick={handleClearToDos}>Clear Tasks</button>
        <hr />
        <ToDoList toDos={toDos} toggleToDo={toggleToDo}/>
        <div><strong>{toDos.filter((todo) =>!todo.completed).length} left to do</strong></div>
   
    </div>
  );
}

export default App;

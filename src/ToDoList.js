import React from 'react';
import ToDo from './ToDo';

export default function ToDoList({toDos, toggleToDo}) {
  return (
    <div>
        {toDos.map((todo) => {
            return <ToDo key={todo.id} toggleToDo={toggleToDo} todo={todo}/>
        })}
    </div>
  )
};


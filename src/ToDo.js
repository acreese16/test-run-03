import React from "react";



function ToDo({ todo, toggleToDo}){

    const handleToDoClick = () => {
        toggleToDo(todo.id)
    }

    return (
        <div>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={handleToDoClick}/>
              {todo.title}
            </label>
            
        </div>
    )

}

export default ToDo;
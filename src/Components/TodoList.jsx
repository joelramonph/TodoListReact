import { useState } from "react";



function TodoList() {
    
    return(
        <> 
        <div className="container">
            <h1>TODO LIST</h1>
            <div className="input-container">
                <input type="text"
                className="heading-input"
                placeholder="Ingrese Tarea"
                />
            <button className="add-list-button">Agregar Lista Tarea</button>
            </div>

            <div className="todo-main"></div>
        </div>
        
        </>
    )
}

export default TodoList
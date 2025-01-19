import { useState } from "react";
import './TodoList.css'


function TodoList() {
    const [todos, setTodos] = useState([])
    const [headingInput, setHeadingInput] = useState('');
    const [listInput, setListInput] = useState({})

    // funcionalidad agregar titulo de la tarea

    const handleAddTodo = () => {
        if (headingInput.trim() !== "") {
            setTodos([...todos, { heading: headingInput, list: [] }])
        }
    }

    return (
        <>
            <div className="container">
                <h1 className="title">TODO LIST</h1>
                <div className="input-container">
                    <input type="text"
                        className="heading-input"
                        placeholder="Ingrese Titulo de Tarea"
                        value={headingInput}
                        onChange={(e) => { setHeadingInput(e.target.value); }}
                    />
                    <button className="add-list-button" onClick={handleAddTodo}>Agregar Lista Tarea</button>
                </div>

                <div className="todo-main">
                    {todos.map((todo, index) => (
                        <div key={index} className="todo-card">
                            <div className="heading_todo">
                                <h3>{todo.heading}</h3> 
                                <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>

        </>
    )
}

export default TodoList
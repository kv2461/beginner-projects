import React from 'react';
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    return(    
    <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map(todo => (
                <ToDo
                    todos = {todos}
                    setTodos = {setTodos}
                    text = {todo.text}
                    key = {todo.id}
                    todo = {todo}
                    />
            ))}
        </ul>
    </div>)
}

export default ToDoList;
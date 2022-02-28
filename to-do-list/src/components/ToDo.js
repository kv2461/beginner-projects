import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item)=> {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }


return (
    <>
        <div className="todo">
            <li
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
                {text}
            </li>
            <button
                className="complete-btn"
                onClick={completeHandler}
            >
                <FontAwesomeIcon icon={faCheck} className="redteam" />
            </button>
            <button
                className = "trash-btn"
                onClick={deleteHandler}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    </>
)
};

export default ToDo;
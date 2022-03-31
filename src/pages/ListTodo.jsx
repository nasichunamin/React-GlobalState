import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, completeTodo } from "../store/todoSlice";

const ListTodo = () =>
{
    const dispatch = useDispatch();
    const todos = useSelector( ( state ) => state.todo.todos );
    return todos.map( ( todo, index ) => (
        <div
            className={ todo.isComplete ? "todo-row complete" : "todo-row" }
            key={ index }>
            <input key={todo.id} type="checkbox" name={todo.title} checked={todo.isComplete ? "checked" : null} onChange={() => dispatch( completeTodo( todo.id ) )} />
            <label for={todo.title}>{todo.title}</label><br/>
            <div className="card-delete">
                <button
                    onClick={ () => dispatch( deleteTodo( todo.id ) ) }
                    className="btn btn-outline-danger delete">
                    Delete
                </button>
            </div>
        </div>
    ) );
}

export default ListTodo
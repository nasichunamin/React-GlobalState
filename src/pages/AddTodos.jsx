import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import './todo.css';

const AddTods = () =>
{
    const dispatch = useDispatch();
    const [ input, setInput ] = useState( "" );

    const inputRef = useRef( null );

    useEffect( () =>
    {
        inputRef.current.focus();
    } );

    const handleChange = ( e ) =>
    {
        setInput( e.target.value );
    };

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();

        dispatch(
            addTodo( {
                id: uuidv4(),
                title: input,
                completed: false,
            } )
        );

        setInput( "" );
    };

    return (
        <form className="form-box border-full" onSubmit={ handleSubmit }>
            <div className="input-group mb-3 border-full">
                <input 
                type="text" 
                placeholder="Add todo..." 
                value={input}
                name="text"
                onChange={ handleChange }
                ref={inputRef} />
                <div className="input-group-append">
                    <button className="text-black btn-submit">Submit</button>
                </div>
            </div>
        </form>
    );
}


export default AddTods
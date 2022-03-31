
import React from 'react'
import ListTodo from './ListTodo'
import AddTodos from './AddTodos'

const HomeTodo = () =>
{
    return (
        <div className='container content'>
        <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-7'>
                <h1 className='text-center header'>todos</h1>
                    <AddTodos />
                    <ListTodo />
                </div>
            </div>
        </div>
    )
}

export default HomeTodo
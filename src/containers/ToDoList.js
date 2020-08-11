import React from 'react';
import { connect } from 'react-redux';

const ToDoList = ({todos}) => {
    console.log(todos);

    return (
        <ul>
            {todos && todos.map(todo => {
                return <li>{todo.todo}</li>
            })}
        </ul>
    )
}

const mapStateToProps = state => ({
    todos: state.todos 
})

export default connect(mapStateToProps)(ToDoList);
import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList({Todos}){
    const todos = Todos.map(todo => (
        <TodoItem task={todo.task} id={todo.id} completed={todo.completed} />
    ))
    return (
        <div>{todos}</div>
    )
}

const mapStateToProps = state => {
    console.log(state.Todos)
    return {
        Todos: state.Todos
    }
}

export default connect(mapStateToProps)(TodoList);
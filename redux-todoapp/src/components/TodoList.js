import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import Divider from '@material-ui/core/Divider';

function TodoList({Todos}){
    return (
        Todos.map((todo, i) => (
            <>
                <TodoItem
                    key={todo.id}
                    task={todo.task} 
                    id={todo.id} 
                    completed={todo.completed} 
                    isEditing={todo.isEditing} 
                />
                {i < Todos.length - 1 && <Divider />}
            </>
        ))
    )
    
}

const mapStateToProps = state => {
    return {
        Todos: state.Todos
    }
}

export default connect(mapStateToProps)(TodoList);
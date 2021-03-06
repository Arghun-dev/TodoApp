import * as ACTIONTYPES from './ActionTypes';


// Todos Actions
export const addTodo = (newTodo) => {
    return {
        type: ACTIONTYPES.ADDTODO,
        newTodo
    }
}

export const removeTodo = (todoId) => {
    return {
        type: ACTIONTYPES.REMOVETODO,
        todoId
    }
}

export const editTodo = (todoId, newTodo) => {
    return {
        type: ACTIONTYPES.EDITTODO,
        todoId,
        newTodo
    }
}

export const toggleTodo = (todoId) => {
    return {
        type: ACTIONTYPES.TOGGLETODO,
        todoId
    }
}

export const toggleEdit = (todoId) => {
    return {
        type: ACTIONTYPES.TOGGLEEDIT,
        todoId
    }
}



// Theme Actions

export const toggleTheme = () => {
    return {
        type: ACTIONTYPES.TOGGLETHEME
    }
}
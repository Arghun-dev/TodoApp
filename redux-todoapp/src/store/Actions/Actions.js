import * as ACTIONTYPES from './ActionTypes';

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

export const toggleTodo = (todoId) => {
    return {
        type: ACTIONTYPES.TOGGLETODO,
        todoId
    }
}
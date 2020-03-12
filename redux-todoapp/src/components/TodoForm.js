import React from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {withStyles} from '@material-ui/styles';
import { connect } from 'react-redux';
import * as Actions from '../store/Actions/Actions';
import useInputState from '../hooks/useInputState';

const styles = {
    buttonStyle: {
        float: 'right'
    },

    container: {
        marginBottom: '2rem',
        padding: '1rem'
    },

    textField: {
        width: '50%'
    }
}

function TodoForm({classes, dispatch}){
    const [state, handleChange, reset] = useInputState('');

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(Actions.addTodo(state))
        reset()
    }

    return (
        <form noValidate autoComplete="off" className={classes.container} onSubmit={handleSubmit}>
            <TextField 
                id="standard-basic" 
                label="New Todo" 
                className={classes.textField}
                value={state}
                onChange={handleChange} 
            />
            <Fab color="primary" aria-label="add" className={classes.buttonStyle} onClick={handleSubmit}>
                <AddIcon />
            </Fab>
        </form>
    )
}

export default connect(null, null)(withStyles(styles)(TodoForm));
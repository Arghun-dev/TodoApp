import React from 'react';
import useInputState from '../hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as Actions from '../store/Actions/Actions';
import { connect } from 'react-redux';

function EditForm({dispatch, task, id}){
    const [input, handleChange] = useInputState(task);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(Actions.editTodo(id, input))
        dispatch(Actions.toggleEdit(id))
    }

    return (
        <form noValidate autoComplete="off" style={{marginLeft: '1rem'}} onSubmit={handleSubmit}>
            <TextField 
                id="filled-basic" 
                variant="filled"
                onChange={handleChange}
                value={input}
                autoFocus 
            />
            <Button 
                variant="contained" 
                color="secondary" 
                style={{float: 'right', marginTop: '1rem', marginRight: '1rem'}}
                onClick={() => dispatch(Actions.toggleEdit(id))}
            >
                Cancel
            </Button>
        </form>
    )
}

export default connect(null, null)(EditForm);
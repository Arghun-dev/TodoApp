import React from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {withStyles} from '@material-ui/styles';

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

function TodoForm({classes}){
    return (
        <form noValidate autoComplete="off" className={classes.container}>
            <TextField id="standard-basic" label="New Todo" className={classes.textField} />
            <Fab color="primary" aria-label="add" className={classes.buttonStyle}>
                <AddIcon />
            </Fab>
        </form>
    )
}

export default withStyles(styles)(TodoForm);
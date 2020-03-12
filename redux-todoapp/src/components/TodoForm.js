import React from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {withStyles} from '@material-ui/styles';

const styles = {
    buttonStyle: {
        float: 'right'
    }
}

function TodoForm({classes}){
    return (
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="New Todo" />
            <Fab color="primary" aria-label="add" className={classes.buttonStyle}>
                <AddIcon />
            </Fab>
        </form>
    )
}

export default withStyles(styles)(TodoForm);
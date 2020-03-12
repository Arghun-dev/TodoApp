import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function EditForm(){
    return (
        <form noValidate autoComplete="off" style={{marginLeft: '1rem'}}>
            <TextField id="standard-basic" label="Standard" style={{width: '50%'}} />
            <Button variant="contained" color="secondary" style={{float: 'right', marginTop: '1rem'}}>
                Cancel
            </Button>
        </form>
    )
}

export default EditForm;
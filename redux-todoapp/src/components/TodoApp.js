import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/styles';

const styles = {
    containerPaper: {
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center'
    }
}

function TodoApp({classes}){
    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper className={classes.containerPaper}>
                    <Grid item xs={6}>
                        <h1 style={{textAlign: 'center'}}>Redux TodoApp</h1>
                        <Paper className={classes.innerPaper}>
                            xs=6
                        </Paper> 
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(TodoApp);
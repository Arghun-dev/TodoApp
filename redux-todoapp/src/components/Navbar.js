import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import {withStyles} from '@material-ui/styles';
import { connect } from 'react-redux';
import * as Actions from '../store/Actions/Actions';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: '1rem',
    },
    title: {
        flexGrow: 1,
    }
}

function Navbar({classes, Theme, dispatch}){
    return (
      <AppBar position="static" style={{backgroundColor: Theme ? 'white' : '#1565c0'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Switch
              onClick={() => dispatch(Actions.toggleTheme())}
            />
          </IconButton>
          <Typography className={classes.title} variant="h6" style={{color: Theme ? 'black' : 'white'}}>
            {Theme ? 'Dark Mode' : 'Light Mode'}
          </Typography>
          <Button color="inherit" style={{color: Theme ? 'black' : 'white'}}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    )
}

const mapStateToProps = state => {
  return {
    Theme: state.Theme
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Navbar));
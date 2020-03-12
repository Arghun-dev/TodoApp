import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import * as Actions from '../store/Actions/Actions';

function TodoItem({task, id, completed, dispatch}){
    return (
        <List>
        <ListItem role={undefined} dense button>
            <ListItemIcon onClick={() => dispatch(Actions.toggleTodo(id))}>
              <Checkbox
                checked={completed}
                edge="start"
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={task} style={{textDecoration: completed ? 'line-through' : ''}} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="comments" onClick={() => dispatch(Actions.removeTodo(id))}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
    )
}

export default connect(null, null)(TodoItem);
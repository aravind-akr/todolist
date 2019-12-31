import React from 'react';
import {List, ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const todolist = ({todos, deletetodos}) => (
    <List>
        {todos.map((todo, index) => (
            <ListItem key={index.toString()} dense button>
                <Checkbox tabIndex={-1} disableRipple />
                <ListItemText primary={todo}/>
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label = "Delete"
                        onClick = {() => {
                            deletetodos(index);
                        }}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);

export default todolist;
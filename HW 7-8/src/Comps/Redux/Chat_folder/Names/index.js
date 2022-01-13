import { ListItem, ListItemText,IconButton } from "@material-ui/core";
import { ListItemSecondaryAction } from "@material-ui/core";

import React from "react";
import { Link } from "react-router-dom";


export const Chat = (props) => {

    
    return (
       
        <ListItem component = {Link} to = {`/chats/${props.id}`}>
            <ListItemText>{props.name}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={props.onClick} edge = "end" aria-label="delete">
                    X
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
       
   
        
    );
}
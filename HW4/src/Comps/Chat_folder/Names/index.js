import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export const Chat = (props) => {
    return (
        <ListItem component = {Link} to = {`/chats/${props.id}`}>
            <ListItemText>{props.name}</ListItemText>
        </ListItem>
    );
}
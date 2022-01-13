import React from "react";
import propTypes from 'prop-types';
import {ListItemText, ListItem, List} from '@material-ui/core';


const Chat  = (props) => {
    

    return (
       <ListItem className={props.class}>
           <ListItemText> {props.name}</ListItemText>
       </ListItem>
    )
}


export const ChatList = (props) => {
    return(
        <List className={props.class}>
            <Chat name="Oleg Olegov" class = "item"></Chat>
            <Chat name="Egor Egorov" class = "item"></Chat>
        </List>
    )
}


Chat.propTypes  = {
    name: propTypes.string,
    class: propTypes.string,
}

ChatList.propTypes = {
    list: propTypes.arrayOf(propTypes.shape({
        name: propTypes.string,
        class: propTypes.string,
    }))

}
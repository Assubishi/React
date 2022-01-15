import React from "react";
import { List } from "@material-ui/core";
import { Chat } from "./Names/index"





export const ChatList = ({list, onDelete}) => {
    
    return(
        <List>
            {list.map((item)=> (
                    <Chat key = {item.id} onClick={()=> onDelete(item.id)} {...item}  />
                
            ))}
            <Chat key = "1" id = "1" name = "fake"/>

        </List>
    );
};

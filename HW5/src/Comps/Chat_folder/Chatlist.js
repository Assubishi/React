import React from "react";
import { List } from "@material-ui/core";
import { Chat } from "./Names"

export const Chatlist = ({list}) => {
    return(
        <List>
            {list.map((item)=> (
                <Chat key = {item.id} {...item} />
            ))}
            <Chat key = "1" id = "1" name = "fake"/>

        </List>
    );
};
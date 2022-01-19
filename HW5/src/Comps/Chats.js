import React from "react";

import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import {Chatlist} from "./Chat_folder/Chatlist";
import { CHATS } from "./Chat_folder/Names/generator"
import { Dialog } from "./Chat_folder/Dialog";

const useStyles = makeStyles({
    cont: {
        display: 'grid',
        gridTemplateColumns: '200px 1fr'
    }
});


export const Chats = () => {

    const classes = useStyles();
    return(
        <div >
            <h1>Chats</h1>
           <div  className={classes.cont}>
               <Chatlist list = {CHATS} />
            <Switch>
                <Route path = "/chats/:chatId" component={ Dialog } />
                <Route path = "/chats/" />
            </Switch>
            
           </div>
           
           
        </div>
    )
}
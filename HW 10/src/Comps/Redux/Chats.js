import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import {ChatList} from "./Chat_folder/ChatList";
import { Dialog } from "./Chat_folder/Dialog";
import {React } from "react";
import { Button } from "@material-ui/core";
import { withChats } from "./hocs/withChats";


const useStyles = makeStyles({
    cont: {
        display: 'grid',
        gridTemplateColumns: '200px 1fr'
    }
});

export const justIds = {
    id: "tasfdsfa",
}

export const ChatsRender = ({chats, onCreateChat, onDeleteChat}) => {
   
    const classes = useStyles();
  

    return(
        <div >
            <h1 data-testid = {justIds.id} >Chats</h1>
           <div    className={classes.cont}>
            <div>
                <ChatList onDelete = {onDeleteChat} list = {chats} />
                <Button onClick= {onCreateChat}>Create chat</Button>
            </div>
            <div>
                <Switch>
                    
                        <Route path = "/chats/:chatId" component={ Dialog } />
                   
                </Switch>
            </div>
            
           </div>
           
           
        </div>
    )
}

export const Chats = withChats(ChatsRender);
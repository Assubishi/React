import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import {ChatList} from "./Chat_folder/ChatList";
import { CHATS } from "./Chat_folder/Names/generator"
import { Dialog } from "./Chat_folder/Dialog";
import { useSelector, useDispatch } from "react-redux";
import {getChatList} from "./store/chats/selectors";
import {deleteMessage} from "./store/messages/action";
import {createChat, deleteChat, setChats} from "./store/chats/action"
import {nanoid} from "nanoid"
import {React, useCallback, useEffect } from "react";
import {Provider} from "react-redux";
import {store} from "./store/index";
import { Button } from "@material-ui/core";



const useStyles = makeStyles({
    cont: {
        display: 'grid',
        gridTemplateColumns: '200px 1fr'
    }
});


export const Chats = () => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();
    const classes = useStyles();
    const onCreate = useCallback(
        () => {
            dispatch(createChat({
                id: nanoid(),
                name: "ChatName"
            }))
        },
        [],
    )

    const onDelete = (chatID) => {
        dispatch(deleteChat(chatID));
        dispatch(deleteMessage(chatID));
    }

    useEffect(() => {
        dispatch(setChats(CHATS));
    }, [])

    return(
        <div >
            <h1>Chats</h1>
           <div  className={classes.cont}>
            <div>
                <ChatList onDelete = {onDelete} list = {chats} />
                <Button onClick= {onCreate}>Create chat</Button>
            </div>
            <div>
            <Switch>
            <Provider store = {store}> 
                <Route path = "/chats/:chatId" component={ Dialog } />
            </Provider>
            </Switch>
            </div>
            
           </div>
           
           
        </div>
    )
}
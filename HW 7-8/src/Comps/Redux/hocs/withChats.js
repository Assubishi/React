import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { getChatList } from "../store/chats/selectors";
import { createChat, deleteChat } from "../store/chats/action";
import {deleteMessage} from "../store/messages/action";
import {nanoid} from "nanoid";


const addChat = (name) => ({
    name, 
    id: nanoid(),
})

export const withChats = (Component) => {
    return (props) => {
        const chats = useSelector(getChatList);
        const  dispatch = useDispatch();

        const onCreateChat = useCallback(()=> {
            dispatch(createChat(addChat("Chat name")))
        }, []);
        const onDeleteChat = useCallback((chatId)=> {
            dispatch(deleteChat(chatId))
            dispatch(deleteMessage(chatId))
        }, [])
        return(
            <Component {...props} chats = {chats} onCreateChat= {onCreateChat} onDeleteChat = {onDeleteChat} />
        )
    }
}
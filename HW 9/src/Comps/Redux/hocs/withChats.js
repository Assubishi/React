import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { getChatList } from "../store/chats/selectors";
import { removeChatWithThunk, addChatWithThunk, onTrackingAddChatWithThunk, onTrackingDeleteChatWithThunk, offTrackingAddChatWithThunk, offTrackingDeleteChatWithThunk } from "../store/chats/action";
import {removeMessagesWithThunk} from "../store/messages/action";
import { useEffect } from "react";


const addChat = (name) => ({
    name, 
})

export const withChats = (Component) => {
    return (props) => {
        const chats = useSelector(getChatList);
        const  dispatch = useDispatch();

        const onCreateChat = useCallback(()=> {
            dispatch(addChatWithThunk(addChat("Chat name")))
        }, []);


        const onDeleteChat = useCallback((chatId)=> {
            dispatch(removeChatWithThunk(chatId))
            dispatch(removeMessagesWithThunk(chatId))
        }, [])


        useEffect(()=> {
            dispatch(onTrackingAddChatWithThunk);
            dispatch(onTrackingDeleteChatWithThunk);

            return() => {
                dispatch(offTrackingAddChatWithThunk);
                dispatch(offTrackingDeleteChatWithThunk);
            }
        }, [])
        return(
            <Component {...props} chats = {chats} onCreateChat= {onCreateChat} onDeleteChat = {onDeleteChat} />
        )
    }
}
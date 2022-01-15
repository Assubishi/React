import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getChatMessagesByListId } from "../store/messages/selectors";
import { addMessageWithThunk, onTrackingAddMessageWithThunk, offTrackingAddMessageWithThunk, removeMessagesWithThunk, onTrackingRemoveMessageWithThunk, offTrackingRemoveMessageWithThunk, createMessageSeperately} from "../store/messages/action";
import { hasChatById } from "../store/chats/selectors";
import { getUserId } from "../store/user/reducer";
import { useEffect } from "react";


export const withChatMessages  = (Component) => {
    return(props) => {
        const {chatId}  = useParams();
        const dispatch = useDispatch();
        const userId = useSelector(getUserId);
        const messageList = useSelector(getChatMessagesByListId(chatId));
        const hasChat = useSelector(hasChatById(chatId));
    
  
        const onSendMessage = (value) => {
            const message = createMessageSeperately(value, "userId");
            dispatch(addMessageWithThunk(chatId, message));
            
        };

        useEffect(()=> {
            dispatch(onTrackingAddMessageWithThunk(chatId));
            dispatch(onTrackingRemoveMessageWithThunk(chatId));
           
            return () => {
                dispatch(offTrackingAddMessageWithThunk(chatId));
                dispatch(offTrackingRemoveMessageWithThunk(chatId));
            }
        }, [])

        return(
            <Component {...props} messageList= {messageList} hasChat = {hasChat} onSendMessage = {onSendMessage} />
        )
    }
}
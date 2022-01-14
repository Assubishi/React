import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getChatMessagesById } from "../store/messages/selectors";
import {sendMessageWithThunk} from "../store/messages/action";
import { hasChatById } from "../store/chats/selectors";

export const withMessages  = (Component) => {
    return(props) => {
        const {chatId}  = useParams();
        const dispatch = useDispatch();
        const messageList = useSelector(getChatMessagesById(chatId));
        const hasChat = useSelector(hasChatById(chatId));
    
  
        const onSendMessage = (value) => {
            dispatch(sendMessageWithThunk("USER_AUTHOR", value, chatId))
        };

        return(
            <Component {...props} messageList= {messageList} hasChat = {hasChat} onSendMessage = {onSendMessage} />
        )
    }
}
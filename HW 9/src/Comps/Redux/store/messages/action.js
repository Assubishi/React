
import { messageRef } from "../../firebase";
import { deleteChat } from "../chats/action";

export const createMessageSeperately = (text, author) => ({
   author,
   text
})

const mapMessageSnapshotToChat = (snapshot) => ({
    ...snapshot.val(),
    id: snapshot.key,
})

export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const createMessage = (message, chatId) => ({
    type: CREATE_MESSAGE,
    payload: {
        message,
        chatId,
    },
})


export const deleteMessage = (chatId) => ({
    type: DELETE_MESSAGE,
    payload: chatId,
})

export const removeMessagesWithThunk = (chatId) => (dispatch) => {
    messageRef.child(chatId).remove(()=> {
        dispatch(deleteMessage(chatId));
    })
}

export const addMessageWithThunk = (chatId, message) => () => {
    messageRef.child(chatId).push(message);
}

export const onTrackingAddMessageWithThunk = (chatId)=>(dispatch) => {
    messageRef.child(chatId).on('child_added', (snapshot)=> {
        dispatch(createMessage(mapMessageSnapshotToChat(snapshot), chatId))
    })
}

export const offTrackingAddMessageWithThunk = (chatId)=>() => {
    messageRef.child(chatId).off("child_added");
}

export const onTrackingRemoveMessageWithThunk = (chatId)=>(dispatch) => {
    messageRef.child(chatId).on('child_removed', ()=> {
        dispatch(deleteMessage(chatId));
    })
}

export const offTrackingRemoveMessageWithThunk = (chatId)=>() => {
    messageRef.child(chatId).off("child_removed");
}


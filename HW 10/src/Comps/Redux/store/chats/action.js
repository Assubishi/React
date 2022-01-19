import { chatsRef } from "../../firebase";




export const CREATE_CHAT = "CREATE_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";
export const EDIT_CHAT = "EDIT_CHAT";
export const SET_CHATS = "SET_CHATS";


const mapChatSnapshotToChat = (snapshot) => ({
    ...snapshot.val(),
    id: snapshot.key,
})

export const createChat = (chat) => ({
    type: CREATE_CHAT,
    payload: chat,
})

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId,
})

export const editChat = (chat) => ({
    type: EDIT_CHAT,
    payload: chat,
})

export const removeChatWithThunk = (chatId) => (dispatch) => {
    chatsRef.child(chatId).remove(()=> {
        dispatch(deleteChat(chatId))
    })
}

export const addChatWithThunk = (chat) => (dispatch) => {
    chatsRef.push(chat);
}

export const onTrackingAddChatWithThunk = (dispatch) => {
    chatsRef.on('child_added', (snapshot)=> {
        dispatch(createChat(mapChatSnapshotToChat(snapshot)))
    })
}

export const offTrackingAddChatWithThunk = () => {
    chatsRef.off('child_added');
}

export const onTrackingDeleteChatWithThunk = (dispatch) => {
    chatsRef.on('child_removed', (snapshot)=> {
        dispatch(deleteChat(snapshot.key))
    })
}

export const offTrackingDeleteChatWithThunk = () => {
    chatsRef.off('child_removed');
}


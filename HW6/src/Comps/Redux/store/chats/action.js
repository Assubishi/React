export const CREATE_CHAT = "CREATE_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";
export const EDIT_CHAT = "EDIT_CHAT";
export const SET_CHATS = "SET_CHATS";


export const createChat = (chat) => ({
    type: CREATE_CHAT,
    payload: chat,
})

export const deleteChat = (chatID) => ({
    type: DELETE_CHAT,
    payload: chatID,
})

export const editChat = (chat) => ({
    type: EDIT_CHAT,
    payload: chat,
})

export const setChats = (chat) => ({
    type: SET_CHATS,
    payload: chat,
})

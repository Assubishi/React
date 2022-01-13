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
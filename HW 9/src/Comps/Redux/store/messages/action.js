import {nanoid} from "nanoid";

const createMessageSeperately = (author, text) => ({
    author,
    text,
    id: nanoid(),
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

export const sendMessageWithThunk = (author, text, chatId) => (dispatch) => {
        const userMessage = createMessageSeperately(author, text);
        dispatch(createMessage(userMessage, chatId));

        if (author === "BOT_AUTHOR"){
            return;
        } else {
            const botMessage = createMessageSeperately("BOT_MESSAGE", "HELLO");
            let timeOut = null;
            timeOut =   setTimeout(()=> {
                dispatch(createMessage(botMessage, chatId));
           }, 1500);
           
        }
        


        
}
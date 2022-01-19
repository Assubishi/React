
import {CREATE_MESSAGE, DELETE_MESSAGE} from "./action";

const initialValue = {
    messages: {},
}

export const messagesReducer = (state = initialValue , action) => {
    switch(action.type) {  
        case CREATE_MESSAGE: {
            const {
                message,
                chatId,
            } = action.payload;

            const newMessage = {...state.messages};
            
            newMessage[chatId] = {
                ...(newMessage[chatId] || {}),
                [message.id]: message,
            }

            return {
                messages: newMessage
            }
        }

        case DELETE_MESSAGE: {
            if(!state.messages.hasOwnProperty(action.payload)){
                return state;
            }

            const newMessage = {...state.messages};
            delete newMessage[action.payload];
            
            return {
                messages: newMessage,
            }
        }
        default: {
            return state;
        }
    }
}
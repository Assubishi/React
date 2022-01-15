import {CREATE_CHAT, DELETE_CHAT, EDIT_CHAT, SET_CHATS} from "./action";

const initialValue = {
    chats: {},
}

export const chatReducer = (state= initialValue, action) => {
    switch(action.type){
        case CREATE_CHAT: {
            return {
                chats: {
                    ...state.chats,
                    [action.payload.id]: action.payload,
                }
                
            }
        }
        case DELETE_CHAT: {
           if(!action.payload){
               return state;
           }

           const chats = {...state.chats};
           delete chats[action.payload];
           return {
               chats
           }
            
        }
        case SET_CHATS: {
            return {
                chats: {...action.payload},
            }
        }
        default: {
            return state;
        }
    }
}
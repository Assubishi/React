import {CREATE_CHAT, DELETE_CHAT, EDIT_CHAT, SET_CHATS} from "./action";

const initialValue = {
    chats: [],
}

export const chatReducer = (state= initialValue, action) => {
    switch(action.type){
        case CREATE_CHAT: {
            return {
                chats: [
                    ...state.chats,
                    action.payload,
                ]
            }
        }
        case DELETE_CHAT: {
            
            const newChats =  state.chats.filter((item)=> item.id !== action.payload);
            return {
                chats: newChats,
            }
        }
        case EDIT_CHAT: {
            const targetIndex = state.chats.findIndex((item) => item.id === action.payload.id);
           
            if (targetIndex===-1) {
                return state;
            } 
           
            const newChats = [...state.chats];
            newChats[targetIndex] = {
                ...newChats[targetIndex],
                ...action.payload,
            }

            return {
                chats: newChats,
            }
        }
        case SET_CHATS: {
            return {
                chats: [...action.payload],
            }
        }
        default: {
            return state;
        }
    }
}
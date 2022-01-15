
import { Toggle_Show } from "./action";

const initialState = {
    isTrue: false,
}

export const createProfileReducer = (state = initialState, action) => {
    
    switch (action.type){
        case Toggle_Show: {
            return{
                isTrue: !state.isTrue,
            } 
        }
        default: {
            return state;
        }
    }
}
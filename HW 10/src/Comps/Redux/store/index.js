import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {createProfileReducer} from "./profile/reducer";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import { chatReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import storage from "redux-persist/lib/storage";
import { postReducer } from "./posts.js/reducer";
import { userReducer } from "./user/reducer";
const persistConfig = {
    key: "root",
    storage,
}

const rootReducer = combineReducers({
    profile: createProfileReducer,
    messages: messagesReducer,
    chats: chatReducer,
    posts: postReducer,
    user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
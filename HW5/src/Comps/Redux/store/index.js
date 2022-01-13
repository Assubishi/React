import { createStore } from "redux";
import {createProfileReducer} from "./actions/reducer";

export const store = createStore(createProfileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
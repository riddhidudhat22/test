import { combineReducers } from "redux";
import { counterreducer } from "./counter.reducer";


export const rootreducer=combineReducers({
    counter:counterreducer
})
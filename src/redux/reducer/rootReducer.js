import { combineReducers } from "redux";
import { actionReducer } from '../reducer/actionReducer';
export const rootReducer = combineReducers({ actionReducer })
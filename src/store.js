import { createStore } from "redux";
import  {rootReducer } from "./redux/reducer/rootReducer";

export const store = createStore(rootReducer)
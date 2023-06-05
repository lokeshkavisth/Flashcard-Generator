// This function imports the `combineReducers` function from the `redux` library.
import { combineReducers } from "redux";

// This function imports the `flashCardData` reducer from the `reducers` directory.
import { flashCardData } from "./reducers";

// This function exports a variable named `rootReducers`.
// `rootReducers` is a reducer that combines the `flashCardData` reducer with any other reducers that are imported into the application.
export const rootReducers = combineReducers({
  flashCardData,
});

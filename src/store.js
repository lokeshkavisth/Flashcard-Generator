// Import the `createStore` function from `redux`.
import { createStore } from "redux";

// Import the `rootReducers` function from `./redux/reducers/rootReducers`.
import { rootReducers } from "./redux/reducers/rootReducers";

// Create a Redux store and export it.
export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// The `createStore` function takes two arguments:
// - The first argument is a function that returns the initial state of the store.
// - The second argument is an optional function that can be used to configure the store.

// The `rootReducers` function is a function that returns an object that maps from action types to reducers.
// The reducers are functions that take the current state and an action as arguments and return the new state.

// The `window.__REDUX_DEVTOOLS_EXTENSION__` variable is a global variable that is set to `true` if the Redux DevTools extension is installed and enabled.
// The `window.__REDUX_DEVTOOLS_EXTENSION__()` function opens the Redux DevTools extension.

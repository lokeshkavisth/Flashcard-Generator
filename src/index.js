// This code imports the React, ReactDOM, and App components.
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// This code imports the Provider and store components from react-redux.
import { Provider } from "react-redux";
import { store } from "./store";

// This code imports the BrowserRouter component from react-router-dom.
import { BrowserRouter } from "react-router-dom";

// This code renders the App component in the root element.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* The BrowserRouter component manages the application's routing.
      It allows users to navigate between different pages in the application. */}
    <BrowserRouter>
      {/* The Provider component provides the store variable to the application's components.
        The store variable contains the application's state. */}
      <Provider store={store}>
        {/* The App component is the main component of the application.
          It renders the application's UI. */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

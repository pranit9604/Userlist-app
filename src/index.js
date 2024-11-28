import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Redux Provider
import store from "./store"; // Import your Redux store
import App from "./App"; // Main App component
import "./index.css"; // Import global styles

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped with Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
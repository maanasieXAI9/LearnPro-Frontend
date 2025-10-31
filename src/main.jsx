import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CourseContextProvider } from "./context/CourseContext.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";

export const server = "https://learnpro-server-jolx.onrender.com/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <CourseContextProvider>
        <App />
      </CourseContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

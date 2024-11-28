import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/userSlice"; // Import the reducer from the slice

const store = configureStore({
  reducer: {
    users: usersReducer, // Add the users slice to the store
  },
});

export default store;
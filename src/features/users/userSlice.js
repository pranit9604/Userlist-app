import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // Initialize with an empty array to avoid undefined issues
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload || []; // Ensure that payload is always an array
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUsers, addUser, setStatus, setError } = userSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(setStatus("loading"));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    if (Array.isArray(data)) {
      dispatch(setUsers(data));
    } else {
      dispatch(setUsers([]));
    }
    dispatch(setStatus("succeeded"));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setStatus("failed"));
  }
};

export default userSlice.reducer;
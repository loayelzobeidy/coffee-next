

import { createSlice } from "@reduxjs/toolkit";
const initialState = { userName: "", id: "", loggedIn: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
});
export const userActions = userSlice.actions;

export default userSlice;

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartStore";
import userSlice from "./userStore";

export const makeStore = () => {
 return  configureStore({
    reducer: {
      cart: cartSlice.reducer,
      user: userSlice.reducer,
    },
  });
};

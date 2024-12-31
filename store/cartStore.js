
import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: [], totalPrice: 10 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.title == action.payload.title
      );
      if (itemIndex === -1) {
        state.items.push({
          title: action.payload.title,
          description: action.payload.description,
          price: action.payload.price,
          quantity: 1,
        });
      } else {
        state.items[itemIndex].quantity++;
        state.items[itemIndex].price += action.payload.price;
      }
      state.totalPrice += action.payload.price;
    },
    removeItemFromCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.title == action.payload.title
      );
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity == 1) {
          state.totalPrice -= action.payload.price;
          state.items = state.items.filter(item => item.title !== action.payload.title);
        } else {
          state.totalPrice -= action.payload.price;
          state.items[itemIndex].quantity--;
          state.items[itemIndex].price -= action.payload.price;
        }
      }
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice;

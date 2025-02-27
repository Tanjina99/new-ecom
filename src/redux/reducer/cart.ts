import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [] as any[],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItem.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      state.cartItem = state.cartItem.map((item) => {
        if (item._id === action.payload) {
          item.quantity = Number(item.quantity || 0) + 1;
        }
        return item;
      });
    },
    decreaseQuantity: (state, action) => {
      state.cartItem = state.cartItem.map((item) => {
        if (item._id === action.payload) {
          item.quantity = Number(item.quantity || 0) - 1;
        }
        return item;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item._id !== action.payload
      );
      return state;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;

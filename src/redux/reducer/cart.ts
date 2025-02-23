import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItem: [] as any[]
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItem.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cartItem = state.cartItem.filter(item => item._id !== action.payload);
            return state;
        },
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
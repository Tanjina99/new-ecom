import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './reducer/search';
import cartSlice from './reducer/cart';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    cart: cartSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
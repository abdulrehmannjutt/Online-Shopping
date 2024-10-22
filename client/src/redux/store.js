import { configureStore } from '@reduxjs/toolkit'
import cartReducer from  './cart/cartSlice'
import adminReducer from './admin/adminSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    admin: adminReducer
  },
})
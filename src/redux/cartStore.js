import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";
import whishlistSlice from "./Slices/whishlistSlice";
import cartSlice from "./Slices/cartSlice";
const cartStore =configureStore({
    reducer :{
    productReducer:ProductSlice,
    whishlistReducer: whishlistSlice,
   cartReducer : cartSlice 
  }
})

export default cartStore
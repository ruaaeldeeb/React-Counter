import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartCount: 0,
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addToCartCount: (state, action) => {
      state.cartCount = state.cartCount + 1;
      state.cartList.push(action.payload);
    },
  },
});

export const { addToCartCount } = cartSlice.actions;

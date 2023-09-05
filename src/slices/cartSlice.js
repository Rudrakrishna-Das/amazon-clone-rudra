import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItemsInCart: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newQuantity = 1;
      let updatedproducts = [...state.items];
      if (existingProductIndex >= 0) {
        const existingProduct = updatedproducts[existingProductIndex];
        existingProduct.quantity = existingProduct.quantity + newQuantity;
        updatedproducts[existingProductIndex] = existingProduct;
      } else {
        action.payload.quantity = newQuantity;
        updatedproducts.push(action.payload);
      }
      state.items = updatedproducts;
      state.totalItemsInCart = updatedproducts.reduce(
        (total, item) => (total += item.quantity),
        0
      );
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;
export const totalItems = (state) => state.cart.totalItemsInCart;

export default cartSlice.reducer;

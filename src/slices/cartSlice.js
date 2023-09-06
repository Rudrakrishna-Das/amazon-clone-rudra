import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItemsInCart: 0,
  totalCartValue: 0,
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
      let updatedProducts = [...state.items];
      if (existingProductIndex >= 0) {
        const existingProduct = updatedProducts[existingProductIndex];
        existingProduct.quantity = existingProduct.quantity + newQuantity;
        updatedProducts[existingProductIndex] = existingProduct;
      } else {
        action.payload.quantity = newQuantity;
        updatedProducts.push(action.payload);
      }
      state.items = updatedProducts;
      state.totalItemsInCart = updatedProducts.reduce(
        (total, item) => (total += item.quantity),
        0
      );

      state.totalCartValue = updatedProducts.reduce(
        (total, item) => (total += item.quantity * item.price),
        0
      );
    },
    removeFromCart: (state, action) => {
      const productIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedProducts = [...state.items];
      if (updatedProducts[productIndex].quantity > 1) {
        const product = updatedProducts[productIndex];
        product.quantity = product.quantity - 1;
        updatedProducts[productIndex] = product;
      } else {
        updatedProducts = updatedProducts.filter(
          (items) => items.id !== action.payload.id
        );
      }
      state.items = updatedProducts;
      state.totalItemsInCart = updatedProducts.reduce(
        (total, item) => (total += item.quantity),
        0
      );
      state.totalCartValue = updatedProducts.reduce(
        (total, item) => (total += item.quantity * item.price),
        0
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;
export const totalItems = (state) => state.cart.totalItemsInCart;
export const totalCartValue = (state) => state.cart.totalCartValue;

export default cartSlice.reducer;

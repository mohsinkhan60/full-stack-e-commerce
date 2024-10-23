import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
  favorites: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);

      if (existingItem) {
        state.totalPrice -= existingItem.totalPrice;
        state.totalQuantity -= existingItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    addToFavorite(state, action) {
      const newItem = action.payload;
      if (!Array.isArray(state.favorites)) {
          state.favorites = [];
      }
  
      const exists = state.favorites.find((item) => item.id === newItem.id);
      if (!exists) {
          state.favorites.push(newItem);
      } else {
        alert("This Item is Already in Favourites")
      }
  },
  
    
    removeFromFavorite(state, action) {
      const id = action.payload;
      const existingItem = state.favorites.find((item) => item.id === id);

      if (existingItem) {
        state.favorites = state.favorites.filter((item) => item.id !== id);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addToFavorite,
  removeFromFavorite,
} = cartSlice.actions;

export default cartSlice.reducer;

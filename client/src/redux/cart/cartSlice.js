import { createSlice } from "@reduxjs/toolkit";

const loadCartItems = () => {
  const savedItems = localStorage.getItem("cartItems");
  return savedItems ? JSON.parse(savedItems) : [];
};

const saveCartItems = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

const loadTotalPrice = () => {
  const savedTotalPrice = localStorage.getItem("totalPrice");
  return savedTotalPrice ? JSON.parse(savedTotalPrice) : 0;
};

const saveTotalPrice = (totalPrice) => {
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
};

const initialState = {
  totalPrice: loadTotalPrice(),
  popUpCartVisible: false,
  cartItems: loadCartItems(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.productId === action.payload);
      if (item) {
        item.quantity += 1;

        item.price = item.originalPrice * item.quantity;
      }

      calculateTotalPrice(state);
      saveCartItems(state.cartItems);
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.productId === action.payload);
      if (item) {
        item.quantity -= 1;

        item.price = item.originalPrice * item.quantity;

        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.productId !== action.payload
          );
        }
      }
      calculateTotalPrice(state);
      saveCartItems(state.cartItems);
    },
    togglePopUpCart: (state) => {
      state.popUpCartVisible = !state.popUpCartVisible;
    },
    addToCart: (state, action) => {
      const { productId, productImg, category, title, price, quantity } =
        action.payload;
      const indexOfProduct = state.cartItems.findIndex(
        (item) => item.productId === productId
      );
      if (indexOfProduct >= 0) {
        const existingItem = state.cartItems[indexOfProduct];

        existingItem.quantity += quantity;
        existingItem.price = existingItem.originalPrice * existingItem.quantity;
      } else {
        state.cartItems.push({
          productId,
          productImg,
          category,
          title,
          price,
          quantity,
          originalPrice: price,
        });
      }

      calculateTotalPrice(state);
      saveCartItems(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload
      );
      calculateTotalPrice(state);
      saveCartItems(state.cartItems);
    },
  },
});

const calculateTotalPrice = (state) => {
  state.totalPrice = state.cartItems.reduce(
    (total, item) => total + item.price,
    0
  );
  saveTotalPrice(state.totalPrice);
};

export const {
  incrementQuantity,
  decrementQuantity,
  togglePopUpCart,
  addToCart,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;

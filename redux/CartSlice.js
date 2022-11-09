import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  cartItems: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    addItem: (state, action) => {
      console.log(action);
      const itemIds = state.cartItems.map((cartItem) => cartItem.id);
      if (itemIds.includes(action.payload.id)) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        state.cartItems = [action.payload, ...state.cartItems];
      }
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemIds = state.cartItems.map((cartItem) => cartItem.id);
      const removeIndex = itemIds.findIndex(
        (itemId) => itemId === action.payload
      );
      const item = state.cartItems[removeIndex];
      if (item.quantity > 1) {
        item.quantity = item.quantity - 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { removeItem, setShowCart, addItem, clearCart } =
  CartSlice.actions;

export const selectShowCart = (state) => {
  return state.cart.showCart;
};

export const selectCartItems = (state) => {
  return state.cart.cartItems;
};

export default CartSlice.reducer;

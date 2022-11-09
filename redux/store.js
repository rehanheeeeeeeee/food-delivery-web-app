import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import cartReducer from "./CartSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

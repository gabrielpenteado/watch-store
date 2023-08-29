import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartReducer from "../store/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;

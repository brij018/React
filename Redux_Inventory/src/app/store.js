import inventorySlice from "../features/inventorySlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    inventory: inventorySlice,
  },
});

export default store;

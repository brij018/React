import counterSlice from "../features/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;

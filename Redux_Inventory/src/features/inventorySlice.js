import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Apple",
      quantity: "50",
      price: "200",
      category: "Food",
    },
  ],
  editValue: null,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.editValue) {
        state.products = state.products.map((p) =>
          p.id === state.editValue.id
            ? { ...action.payload, id: state.editValue.id }
            : p,
        );
        state.editValue = null;
      } else {
        const newProduct = {
          id: Date.now(),
          name: action.payload.name,
          quantity: action.payload.quantity,
          price: action.payload.price,
          category: action.payload.category,
        };
        state.products.push(newProduct);
      }
    },
    handleDelete: (state, action) => {
      state.products = state.products.filter((p) => p.id != action.payload);
    },
    setEditValue: (state, action) => {
      state.editValue = state.products.find((p) => p.id === action.payload);
    },
  },
});

export const { add, handleDelete, setEditValue } = inventorySlice.actions;

export default inventorySlice.reducer;

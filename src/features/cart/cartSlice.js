import { createSlice } from "@reduxjs/toolkit";
import uuid from "uuid";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      let updated = false;
      state.map((item, index) => {
        if (item.id === id) {
          state[index].quantity = item.quantity + 1;
          updated = true;
        }
      });
      if (!updated) {
        const item = {
          ...action.payload,
          quantity: 1,
        };
        state.push(item);
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      let reduced = false;
      state.map((item, index) => {
        if (item.id === id && item.quantity > 1) {
          state[index].quantity = item.quantity - 1;
          reduced = true;
        }
      });
      if (!reduced) {
        for (var i = 0; i < state.length; i++) {
          if (state[i].id === id) {
            state.splice(i, 1);
            break;
          }
        }
      }
    },
    deleteItem: (state, action) => {
      const { id } = action.payload;
      state.filter(item => item.id===id);
    }
  },
});

// this is for dispatch
export const { addItem, removeItem, deleteItem } = cartSlice.actions;

// this is for configureStore
export default cartSlice.reducer;

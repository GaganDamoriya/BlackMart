import { createSlice } from "@reduxjs/toolkit";

export const Dispatcher = createSlice({
  name: "counter",
  initialState: {
    category: [],
  },
  reducer: {
    setCategories: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { setCategories } = counterSlice.actions;

export default counterSlice.setCategories;

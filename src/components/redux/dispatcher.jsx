import { createSlice } from "@reduxjs/toolkit";

export const Dispatcher = createSlice({
  name: "counter",
  initialState: {
    category: [],
    items: {},
  },
  reducers: {
    setCategories: (state, action) => {
      state.value += action.payload;
    },
    setItems: (state, action) => {
      state.items[action.payload] =
        state.items[action.payload] === undefined
          ? 1
          : state.items[action.payload] + 1;
    },
  },
});
export const { setCategories, setItems } = Dispatcher.actions;

export default Dispatcher.reducer;

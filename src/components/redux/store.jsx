import { configureStore } from "@reduxjs/toolkit";
import Dispatcher from "./dispatcher";

export default configureStore({
  reducer: {
    counter: Dispatcher,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./Slice/RegisterSlice";

export const store = configureStore({
  reducer: {
    users: registerReducer,
  },
});
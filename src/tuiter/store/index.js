import authReducer from "../services/auth-reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: authReducer,
  },
});

export default store;

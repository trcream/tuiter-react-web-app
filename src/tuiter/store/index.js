import authReducer from "../services/auth-reducer";
import { configureStore } from "@reduxjs/toolkit";

// import store from "./tuiter/store";

export const store = configureStore({
  reducer: {
    user: authReducer,
  },
});

export default store;

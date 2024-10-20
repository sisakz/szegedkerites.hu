import { configureStore } from "@reduxjs/toolkit";
import resetPasswordReducer from "./resetPasswordSlice";

const store = configureStore({
  reducer: {
    resetPassword: resetPasswordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

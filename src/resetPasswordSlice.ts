import { createSlice } from "@reduxjs/toolkit";

export interface ResetPasswordState {
  email: string;
}

const initialState: ResetPasswordState = {
  email: "",
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = resetPasswordSlice.actions;
const resetPasswordReducer = resetPasswordSlice.reducer;
export default resetPasswordReducer;

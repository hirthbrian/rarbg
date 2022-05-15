import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToastState {
  text: string;
  isVisible: boolean;
}

const initialState: ToastState = {
  text: "",
  isVisible: false,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
      state.isVisible = true;
    },
    hideToast: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;

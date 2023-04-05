import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  token: string;
  email: string;
}

const initialState: IAuthState = {
  token: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state: IAuthState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setEmail: (state: IAuthState, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;

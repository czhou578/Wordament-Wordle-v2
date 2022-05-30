import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Credentials {
  Username: string;
  Password: string;
}

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: null as string | null,
  },
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;

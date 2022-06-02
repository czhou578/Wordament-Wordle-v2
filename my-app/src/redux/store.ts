import { configureStore } from "@reduxjs/toolkit";
import reducers from "../api";

export const store = configureStore({
  reducer: {
    info: reducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

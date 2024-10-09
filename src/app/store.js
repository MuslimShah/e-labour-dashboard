import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../features/Api_Slice";
import authSliceReducer from "../features/Auth_Slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV === "development" ? true : false,
});

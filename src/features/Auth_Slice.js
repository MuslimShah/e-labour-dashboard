import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("e_laber_user_token")
    ? JSON.parse(localStorage.getItem("e_laber_user_token"))
    : null,
  userInfo: localStorage.getItem("e_laber_userInfo")
    ? JSON.parse(localStorage.getItem("e_laber_userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("e_laber_user_token", JSON.stringify(state.token));
    },
    setCredientials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("e_laber_userInfo", JSON.stringify(state.userInfo));
    },
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      localStorage.clear();
    },
  },
});

export const { setCredientials, setUserToken, logout } = authSlice.actions;
export default authSlice.reducer;

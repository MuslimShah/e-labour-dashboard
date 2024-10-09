import { apiSlice } from "./Api_Slice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: data,
        };
      },
    }),
    getCurrentUser: builder.query({
      query: (token) => ({
        url: `/user/show-me`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    // register: builder.mutation({
    //   query: (data) => ({
    //     url: `${USER_URL}/register`,
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    // registerWithGoogle: builder.mutation({
    //   query: (data) => ({
    //     url: `${USER_URL}/google`,
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    // logout: builder.mutation({
    //   query: () => ({ url: `${USER_URL}/logout`, method: "POST" }),
    // }),
    // forgotPassword: builder.mutation({
    //   query: (data) => ({
    //     url: `${USER_URL}/forgot-password`,
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    // resetPassword: builder.mutation({
    //   query: (data) => ({
    //     url: `${USER_URL}/reset-password`,
    //     method: "PUT",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useLoginMutation,
  useGetCurrentUserQuery,
  useLogoutMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useRegisterWithGoogleMutation,
} = userApiSlice;

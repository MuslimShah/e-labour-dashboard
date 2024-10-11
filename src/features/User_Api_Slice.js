import { apiSlice } from "./Api_Slice";

export const useApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (token) => {
        return {
          url: `/admin/all-users`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    activateUserAccount: builder.mutation({
      query: ({ token, id }) => {
        return {
          url: `/admin/activate-account/${id}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    deActivateUserAccount: builder.mutation({
      query: ({ token, id }) => {
        return {
          url: `/admin/deactivate-account/${id}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    deleteUser: builder.mutation({
      query: ({ token, id }) => {
        return {
          url: `/admin/delete-user/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useActivateUserAccountMutation,
  useDeActivateUserAccountMutation,
  useDeleteUserMutation,
} = useApiSlice;

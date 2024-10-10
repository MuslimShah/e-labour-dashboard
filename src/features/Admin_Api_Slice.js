import { apiSlice } from "./Api_Slice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      query: (token) => {
        return {
          url: `/admin/dashboard-data`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getAllCategories: builder.query({
      query: (token) => {
        return {
          url: `/admin/all-categories`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    addNewCategory: builder.mutation({
      query: ({ token, data }) => {
        return {
          url: `/admin/create-category`,
          method: "POST",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    updateCategory: builder.mutation({
      query: ({ token, id, data }) => {
        return {
          url: `/admin/update-category/${id}`,
          method: "PATCH",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    deleteCategory: builder.mutation({
      query: ({ token, id }) => {
        return {
          url: `/admin/delete-category/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    addNewAdmin: builder.mutation({
      query: ({ data, token }) => ({
        url: "/admin/create-admin",
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateAdmin: builder.mutation({
      query: ({ token, data, id }) => ({
        url: `/admin/update-admin/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getAllAdmin: builder.query({
      query: (token) => ({
        url: "/admin/all-admins",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    delteAdmin: builder.mutation({
      query: ({ token, id }) => ({
        url: `/admin/delete-admin/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetDashboardDataQuery,
  useGetAllCategoriesQuery,
  useAddNewCategoryMutation,
  useAddNewAdminMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllAdminQuery,
  useDelteAdminMutation,
  useUpdateAdminMutation,
} = adminApiSlice;

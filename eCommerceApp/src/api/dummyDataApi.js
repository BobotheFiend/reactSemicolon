import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = import.meta.env.VITE_APP_BASEURL;

export const dummyDataApi = createApi({
  reducerPath: "dummyApi",

  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),

  tagTypes: ["Cart"],

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
    }),

    getAllProducts: builder.query({
      query: () => "/products",
    }),

    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),

    getCartItems: builder.query({
      query: (id) => `/carts/${id}`,
      providesTags: ["Cart"],
    }),

    addToCart: builder.mutation({
      query: (body) => ({
        url: "/carts/add",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useLoginMutation, useGetAllProductsQuery, useGetSingleProductQuery, useAddToCartMutation, useGetCartItemsQuery,
} = dummyDataApi;
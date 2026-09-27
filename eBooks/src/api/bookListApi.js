
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = import.meta.env.VITE_BOOK_APP_BASEURL;
const API_KEY = import.meta.env.VITE_BOOK_API_KEY;
const API_HOST = import.meta.env.VITE_BOOK_API_HOST;

export const bookListApi = createApi({

    reducerPath: "bookListApi",

    baseQuery: fetchBaseQuery({
        baseUrl: URL,
        prepareHeaders: (Headers) => {
            Headers.set('x-rapidapi-key', API_KEY);
            Headers.set('x-rapidapi-host', API_HOST);
            return Headers;
        },
    }),

    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => "/books",
        }),

        getABookByID: builder.query({

            query: (id) => `/books/${id}`,
        }),


    }),

});


export const {
    useGetAllBooksQuery, useGetABookByIDQuery
} = bookListApi;

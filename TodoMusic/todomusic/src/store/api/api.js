import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const API_URL = 'http://localhost:4200/examples';

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Example'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder => ({
        getExample: builder.query({
            query: () => '/',
            providesTags: () => [{
                type: 'Example',
            }]
        }),
    })
})

export const {useGetExampleQuery} = api;
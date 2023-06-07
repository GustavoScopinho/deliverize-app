import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6077803e1ed0ae0017d6aea4.mockapi.io/'
  }),
  endpoints: () => ({})
})

export const apiReducer = apiSlice.reducer
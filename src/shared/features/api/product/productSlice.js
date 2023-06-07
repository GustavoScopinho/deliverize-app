import { apiSlice } from "../../api";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getProduct: build.query({
      query: () => ({
        url: '/test-frontend/products',
        method: 'GET'
      })
    })
  }),
  overrideExisting: false
})

export const { useGetProductQuery} = productSlice
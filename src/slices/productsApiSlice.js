import { PRODUCTS_URL } from '../constants/api-constant';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getNewArrivals: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}?isNew=true`,
      }),
      keepUnusedDataFor: 5,
    }),
    getOnSales: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}?isSale=true`,
      }),
      keepUnusedDataFor: 5,
    }),
    getBrandProducts: builder.query({
      query: (brand) => ({
        url: `${PRODUCTS_URL}?brands=${brand}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getTopSelleres: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getSearchProducts: builder.query({
      query: (search) => ({
        url: `${PRODUCTS_URL}?q=${search}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetNewArrivalsQuery,
  useGetOnSalesQuery,
  useGetTopSelleresQuery,
  useGetBrandProductsQuery,
  useGetSearchProductsQuery,
  useGetProductDetailsQuery,
} = productsApiSlice;

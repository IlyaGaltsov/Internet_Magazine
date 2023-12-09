import { REVIEWS_URL } from '../constants/api-constant';
import { apiSlice } from './apiSlice';

export const reviewsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: REVIEWS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetReviewsQuery } = reviewsApiSlice;

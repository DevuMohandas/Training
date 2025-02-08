import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://vineoback-gh-qa.caprover2.innogenio.com/graphql';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    userLogin: builder.query({
      query: ({ email, password }) => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query userLogin($email: String!, $password: String!) {
              userLogin(payload: {email: $email, password: $password}) {
                accessToken
                refreshToken
              }
            }
          `,
          variables: { email, password },
        },
      }),
    }),
  }),
});

export const { useLazyUserLoginQuery } = apiSlice;

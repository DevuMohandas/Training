import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: ' https://vineoback-gh-qa.caprover2.innogenio.com/graphql', // replace this with the URL you were provided
    }),
    cache: new InMemoryCache(),
  });
};

export const client = createApolloClient();

import { gql } from '@apollo/client';

export const USER_LOGIN_QUERY = gql`
  query userLogin($payload: UserLoginDto!) {
    userLogin(payload: $payload) {
      accessToken
      refreshToken
    }
  }
`;

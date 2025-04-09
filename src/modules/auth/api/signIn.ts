'use server';

import {
  isCurrentUser,
  isInvalidCredentialsError,
  isMissingPasswordError,
  isNotVerifiedError,
} from '@/lib/shop-api/graphql';
import { shopClient } from '@/lib/shop-api/shopClient';

export const signIn = async ({ password, username }: { password: string; username: string }) => {
  const response = await shopClient.mutation({
    login: {
      __typename: true,
      __args: {
        password,
        username,
      },
      on_CurrentUser: {
        __typename: true,
        id: true,
        identifier: true,
        channels: {
          id: true,
          token: true,
          code: true,
        },
      },
      on_InvalidCredentialsError: {
        __typename: true,
        errorCode: true,
        message: true,
      },
      on_NotVerifiedError: {
        __typename: true,
        errorCode: true,
        message: true,
      },
    },
  });

  if (isCurrentUser(response.login)) {
    return response.login;
  }

  if (
    isMissingPasswordError(response.login) ||
    isInvalidCredentialsError(response.login) ||
    isNotVerifiedError(response.login)
  ) {
    throw new Error(response.login.errorCode);
  }

  throw new Error('UNKNOWN_ERROR');
};

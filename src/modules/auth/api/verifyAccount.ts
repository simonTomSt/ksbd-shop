'use server';
import {
  isCurrentUser,
  isNativeAuthStrategyError,
  isVerificationTokenExpiredError,
  isVerificationTokenInvalidError,
} from '@/lib/shop-api/graphql';
import { shopClient } from '@/lib/shop-api/shopClient';

export const verifyAccount = async (token: string) => {
  const response = await shopClient.mutation({
    verifyCustomerAccount: {
      __args: {
        token,
      },
      __typename: true,
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
      on_VerificationTokenInvalidError: {
        __typename: true,
        errorCode: true,
        message: true,
      },
      on_VerificationTokenExpiredError: {
        __typename: true,
        errorCode: true,
        message: true,
      },
      on_NativeAuthStrategyError: {
        __typename: true,
        errorCode: true,
        message: true,
      },
    },
  });

  if (isCurrentUser(response.verifyCustomerAccount)) {
    return response.verifyCustomerAccount;
  }

  if (
    isNativeAuthStrategyError(response.verifyCustomerAccount) ||
    isVerificationTokenInvalidError(response.verifyCustomerAccount) ||
    isVerificationTokenExpiredError(response.verifyCustomerAccount)
  ) {
    throw new Error(response.verifyCustomerAccount.errorCode);
  }

  throw new Error('UNKNOWN_ERROR');
};

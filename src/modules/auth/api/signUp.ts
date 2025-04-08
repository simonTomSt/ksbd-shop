'use server';
import {
  isErrorResult,
  isMissingPasswordError,
  isNativeAuthStrategyError,
  isPasswordValidationError,
  isSuccess,
  type RegisterCustomerInput,
} from '@/lib/shop-api/graphql';
import { shopClient } from '@/lib/shop-api/shopClient';

export const signUp = async (input: RegisterCustomerInput) => {
  //   const client = await makeShopClient();
  const response = await shopClient.mutation({
    registerCustomerAccount: {
      __args: {
        input: {
          emailAddress: '',
        },
      },
      on_Success: {
        __typename: true,
        success: true,
      },
      on_MissingPasswordError: {
        __typename: true,
        errorCode: true,
        message: true,
      },
      on_NativeAuthStrategyError: {
        __typename: true,
        errorCode: true,
        message: true,
      },
      on_PasswordValidationError: {
        __typename: true,
        errorCode: true,
        message: true,
        validationErrorMessage: true,
      },
      on_ErrorResult: {
        __typename: true,
        errorCode: true,
        message: true,
      },
    },
  });

  if (isSuccess(response.registerCustomerAccount)) {
    return response.registerCustomerAccount;
  }

  if (
    isMissingPasswordError(response.registerCustomerAccount) ||
    isNativeAuthStrategyError(response.registerCustomerAccount) ||
    isPasswordValidationError(response.registerCustomerAccount) ||
    isErrorResult(response.registerCustomerAccount)
  ) {
    throw new Error(response.registerCustomerAccount.errorCode);
  }

  throw new Error('Unknown error');
};

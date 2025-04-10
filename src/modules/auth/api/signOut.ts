'use server';

import { deleteAuthTokenCookie } from '@/lib/shop-api/auth/deleteAuthTokenCookie';
import { shopClient } from '@/lib/shop-api/shopClient';

export const signOut = async () => {
  const response = await shopClient.mutation({
    logout: {
      __typename: true,
      success: true,
    },
  });

  if (response.logout.success) {
    await deleteAuthTokenCookie();
    return response.logout;
  }

  throw new Error('UNKNOWN_ERROR');
};

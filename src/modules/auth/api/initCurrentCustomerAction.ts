'use server';
import { isCustomer } from '@/lib/shop-api/graphql';
import { shopClient } from '@/lib/shop-api/shopClient';

export const initCurrentCustomerAction = async () => {
  const response = await shopClient.query({
    __typename: true,
    activeCustomer: {
      __typename: true,
      id: true,
      emailAddress: true,
      firstName: true,
    },
  });

  if (response.activeCustomer && isCustomer(response.activeCustomer)) {
    return response.activeCustomer;
  }

  return null;
};

import { isCustomer } from '@/lib/shop-api/graphql';
import { ssrShopClient } from '@/lib/shop-api/ssrShopClient';

export const getCurrentCustomer = async () => {
  const client = await ssrShopClient();
  const response = await client.query({
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

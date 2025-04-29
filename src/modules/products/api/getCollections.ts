import { CollectionListOptions } from '@/lib/shop-api/graphql';
import { ssrShopClient } from '@/lib/shop-api/ssrShopClient';

export const getCollections = async (options: CollectionListOptions = {}) => {
  const client = await ssrShopClient();

  const data = await client.query({
    __typename: true,
    collections: {
      __args: {
        options,
      },
      totalItems: true,
      items: {
        __typename: true,
        id: true,
        name: true,
        slug: true,
        description: true,
        featuredAsset: {
          __typename: true,
          preview: true,
        },
        productVariants: {
          __typename: true,
          totalItems: true,
        },
      },
    },
  });

  return data.collections;
};

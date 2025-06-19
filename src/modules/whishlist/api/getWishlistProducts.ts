import { Product } from '@/lib/shop-api/graphql';
import { ssrShopClient } from '@/lib/shop-api/ssrShopClient';

export const getWishlistProducts = async (productIds: string[]): Promise<Product[]> => {
  if (productIds.length === 0) {
    return [];
  }

  const client = await ssrShopClient();

  const result = await client.query({
    products: {
      __args: {
        options: {
          filter: {
            id: {
              in: productIds,
            },
          },
        },
      },
      items: {
        __scalar: true,
        assets: {
          __scalar: true,
        },
        featuredAsset: {
          __scalar: true,
        },
        variants: {
          id: true,
          priceWithTax: true,
        },
      },
    },
  });

  return result.products.items as Product[];
};

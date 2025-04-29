import { Product } from '@/lib/shop-api/graphql';
import { ssrShopClient } from '@/lib/shop-api/ssrShopClient';

export const getProducts = async (): Promise<{
  products: Product[];
  totalItems: number;
}> => {
  const client = await ssrShopClient();

  const products = await client.query({
    __typename: true,
    products: {
      __typename: true,
      totalItems: true,
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
  return {
    products: products.products.items as Product[],
    totalItems: products.products.totalItems,
  };
};

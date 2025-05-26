import { Product } from '@/lib/shop-api/graphql';
import { ssrShopClient } from '@/lib/shop-api/ssrShopClient';

export const getProduct = async (slug: string): Promise<Product> => {
  const client = await ssrShopClient();

  const result = await client.query({
    product: {
      __args: {
        slug,
      },
      __scalar: true,
      assets: {
        __scalar: true,
      },
      featuredAsset: {
        __scalar: true,
      },
      variants: {
        id: true,
        name: true,
        price: true,
        priceWithTax: true,
        stockLevel: true,
        // @ts-ignore - Custom fields are not properly typed in the schema
        customFields: {
          description: true,
        },
        options: {
          id: true,
          name: true,
        },
      },
      description: true,
      name: true,
      slug: true,
    },
  });

  return result.product as Product;
};

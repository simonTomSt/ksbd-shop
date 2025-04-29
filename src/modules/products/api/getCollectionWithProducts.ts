import { ProductListOptions } from '@/lib/shop-api/graphql';
import { ssrShopClient } from '@/lib/shop-api/ssrShopClient';

type GetCollectionWithProductsOptions = {
  slug: string;
  productOptions: ProductListOptions;
};

export const getCollectionWithProducts = async ({
  slug,
  productOptions,
}: GetCollectionWithProductsOptions) => {
  const client = await ssrShopClient();

  const products = await client.query({
    collection: {
      __typename: true,
      __args: {
        slug,
      },
      breadcrumbs: {
        __typename: true,
        id: true,
        name: true,
        slug: true,
      },
      name: true,
      slug: true,
      productVariants: {
        __args: {
          options: productOptions,
        },
        totalItems: true,
        items: {
          __typename: true,
          id: true,
          priceWithTax: true,
          stockLevel: true,
        },
      },
    },
  });
  return products.collection;
};

'use server';
import { SearchInput } from '@/lib/shop-api/graphql';
import { shopClient } from '@/lib/shop-api/shopClient';

export const searchProducts = async (input: SearchInput) => {
  const response = await shopClient.query({
    search: {
      __args: {
        input,
      },
      totalItems: true,
      items: {
        __typename: true,
        productName: true,
        slug: true,
        sku: true,
        productId: true,
        productVariantId: true,
        inStock: true,
        currencyCode: true,
        productVariantName: true,
        productAsset: {
          id: true,
          preview: true,
        },
        price: {
          __typename: true,
          on_SinglePrice: {
            __typename: true,
            value: true,
          },
          on_PriceRange: {
            __typename: true,
            min: true,
            max: true,
          },
        },
        priceWithTax: {
          __typename: true,
          on_SinglePrice: {
            __typename: true,
            value: true,
          },
          on_PriceRange: {
            __typename: true,
            min: true,
            max: true,
          },
        },
      },
    },
  });

  return response.search;
};

'use server';

import { shopClient } from '@/lib/shop-api/shopClient';

export const addToCartAction = async (productVariantId: string, quantity: number) => {
  try {
    const result = await shopClient.mutation({
      addItemToOrder: {
        __args: {
          productVariantId,
          quantity,
        },
        __typename: true,
        on_Order: {
          id: true,
          total: true,
          totalQuantity: true,
        },
        on_ErrorResult: {
          errorCode: true,
          message: true,
        },
      },
    });

    return result;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

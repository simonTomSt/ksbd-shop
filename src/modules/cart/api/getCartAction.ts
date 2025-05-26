'use server';

import { shopClient } from '@/lib/shop-api/shopClient';

export type CartItem = {
  id: string;
  quantity: number;
  productVariant: {
    id: string;
    name: string;
    price: number;
    product: {
      id: string;
      name: string;
      slug: string;
      featuredAsset: {
        preview: string;
      } | null;
    };
  };
};

export type Cart = {
  id: string;
  totalQuantity: number;
  total: number;
  lines: CartItem[];
};

export async function getCartAction(): Promise<Cart | null> {
  try {
    const result = await shopClient.query({
      activeOrder: {
        id: true,
        totalQuantity: true,
        total: true,
        lines: {
          id: true,
          quantity: true,
          productVariant: {
            id: true,
            name: true,
            price: true,
            product: {
              id: true,
              name: true,
              slug: true,
              featuredAsset: {
                preview: true,
              },
            },
          },
        },
      },
    });

    if (!result.activeOrder) {
      return null;
    }

    return result.activeOrder as Cart;
  } catch (error) {
    console.error('Error fetching cart:', error);
    return null;
  }
}

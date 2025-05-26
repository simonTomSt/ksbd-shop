import { shopClient } from '@/lib/shop-api/shopClient';

export interface CheckoutData {
  id: string;
  total: number;
  shippingAddress: {
    fullName: string;
    streetLine1: string;
    streetLine2?: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  } | null;
  billingAddress: {
    fullName: string;
    streetLine1: string;
    streetLine2?: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  } | null;
  shippingLines: Array<{
    id: string;
    shippingMethod: {
      id: string;
      name: string;
      description: string;
    };
    price: number;
  }>;
  paymentLines: Array<{
    id: string;
    paymentMethod: {
      id: string;
      name: string;
      description: string;
    };
    amount: number;
  }>;
}

export async function getCheckoutAction(): Promise<CheckoutData> {
  const result = await shopClient.query({
    activeOrder: {
      id: true,
      total: true,
      shippingAddress: {
        fullName: true,
        streetLine1: true,
        streetLine2: true,
        city: true,
        province: true,
        postalCode: true,
        country: true,
      },
      billingAddress: {
        fullName: true,
        streetLine1: true,
        streetLine2: true,
        city: true,
        province: true,
        postalCode: true,
        country: true,
      },
      shippingLines: {
        id: true,
        shippingMethod: {
          id: true,
          name: true,
          description: true,
        },
        price: true,
      },
      paymentLines: {
        id: true,
        paymentMethod: {
          id: true,
          name: true,
          description: true,
        },
        amount: true,
      },
    },
  });

  if (!result.activeOrder) {
    throw new Error('No active order found');
  }

  return result.activeOrder;
}

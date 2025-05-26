import { CreateAddressInput } from '@/lib/shop-api/graphql';
import { shopClient } from '@/lib/shop-api/shopClient';

export async function setShippingAddressAction(input: CreateAddressInput) {
  const result = await shopClient.mutation({
    setOrderShippingAddress: {
      __args: {
        input,
      },
      shippingAddress: {
        fullName: true,
        streetLine1: true,
        streetLine2: true,
        city: true,
        province: true,
        postalCode: true,
        country: true,
      },
    },
  });

  return result.setOrderShippingAddress;
}

export async function setBillingAddressAction(input: CreateAddressInput) {
  const result = await shopClient.mutation({
    setOrderBillingAddress: {
      __args: {
        input,
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
    },
  });

  return result.setOrderBillingAddress;
}

export async function setShippingMethodAction(shippingMethodId: string[]) {
  const result = await shopClient.mutation({
    setOrderShippingMethod: {
      __args: {
        shippingMethodId,
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
    },
  });

  return result.setOrderShippingMethod;
}

export async function setPaymentMethodAction(paymentMethodId: string) {
  const result = await shopClient.mutation(
    {
      setOrderPaymentMethod: {
        id: true,
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
    },
    {
      paymentMethodId,
    },
  );

  return result.setOrderPaymentMethod;
}

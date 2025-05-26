'use client';

import { Button } from '@heroui/button';
import { Image } from '@heroui/image';
import { Link } from '@heroui/link';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Cart, CartItem, getCartAction } from '../api/getCartAction';

export const CartPageTemplate = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations('cart');

  useEffect(() => {
    setIsLoading(true);
    getCartAction().then((cartData) => {
      setCart(cartData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <p className="text-default-500">Loading...</p>
        </div>
      </div>
    );
  }

  if (!cart?.lines.length) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center h-64 gap-4">
          <p className="text-default-500 text-lg">{t('emptyCart')}</p>
          <Button as={Link} href="/shop" color="primary">
            {t('goToCartPage')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-8">{t('drawerTitle')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {cart.lines.map((item) => (
              <CartItemRow key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-default-50 rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-semibold">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{cart.total.toFixed(2)} zł</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-divider pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{cart.total.toFixed(2)} zł</span>
                </div>
              </div>
            </div>

            <Button color="primary" className="w-full">
              {t('checkout')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

type CartItemRowProps = {
  item: CartItem;
};

const CartItemRow = ({ item }: CartItemRowProps) => {
  return (
    <div className="flex gap-6 py-6 border-b border-divider">
      <div className="w-24 h-24 flex-shrink-0">
        <Image
          src={item.productVariant.product.featuredAsset?.preview || '/placeholder.png'}
          alt={item.productVariant.product.name}
          className="object-cover rounded-lg w-full h-full"
          width={96}
          height={96}
        />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <Link
          href={`/products/${item.productVariant.product.slug}`}
          className="text-base font-medium hover:underline"
        >
          {item.productVariant.product.name}
        </Link>
        <p className="text-sm text-default-500">{item.productVariant.name}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="flat"
              isIconOnly
              className="h-8 w-8"
              aria-label="Decrease quantity"
            >
              -
            </Button>
            <span className="text-sm">{item.quantity}</span>
            <Button
              size="sm"
              variant="flat"
              isIconOnly
              className="h-8 w-8"
              aria-label="Increase quantity"
            >
              +
            </Button>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">
              {(item.productVariant.price * item.quantity).toFixed(2)} zł
            </p>
            <p className="text-xs text-default-500">
              {item.productVariant.price.toFixed(2)} zł each
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

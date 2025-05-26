'use client';
import { Button } from '@heroui/button';
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '@heroui/drawer';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { Cart, getCartAction } from '../../api/getCartAction';
import { CardDrawerItem } from './CardDraweItem';

import { pathnames } from '@/lib/config/pathnames';
import { useCartDrawerOpened } from '@/lib/hooks/useCartDrawerOpened';
import { PureLink } from '@/modules/common/PureLink';
import { UILink } from '@/modules/common/UILink';

export const CartDrawer = () => {
  const [cartOpened, setCartOpened] = useCartDrawerOpened();
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations('cart');

  useEffect(() => {
    if (cartOpened) {
      setIsLoading(true);
      getCartAction().then((cartData) => {
        setCart(cartData);
        setIsLoading(false);
      });
    }
  }, [cartOpened]);

  return (
    <Drawer isOpen={cartOpened} onOpenChange={setCartOpened}>
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1">{t('drawerTitle')}</DrawerHeader>
            <DrawerBody>
              {isLoading ? (
                <div className="flex items-center justify-center h-32">
                  <p className="text-default-500">Loading...</p>
                </div>
              ) : cart?.lines.length ? (
                <div className="space-y-4">
                  {cart.lines.map((item) => (
                    <CardDrawerItem key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-32">
                  <p className="text-default-500">{t('emptyCart')}</p>
                </div>
              )}
            </DrawerBody>
            <DrawerFooter>
              <div className="flex flex-col gap-4 w-full">
                {cart && (
                  <div className="flex justify-between text-sm">
                    <span>Total:</span>
                    <span className="font-medium">{cart.total.toFixed(2)} zł</span>
                  </div>
                )}
                <div className="flex gap-2">
                  <Button
                    type="button"
                    as={UILink}
                    href={pathnames.cart.path}
                    color="secondary"
                    onPress={onClose}
                    className="flex-1"
                  >
                    {t('goToCartPage')}
                  </Button>
                  <Button
                    type="button"
                    as={PureLink}
                    href={pathnames.checkout.path}
                    color="primary"
                    onPress={onClose}
                    className="flex-1"
                  >
                    {t('checkout')}
                  </Button>
                </div>
              </div>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

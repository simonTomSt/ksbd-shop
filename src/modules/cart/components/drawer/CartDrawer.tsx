'use client';
import { Button } from '@heroui/button';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@heroui/drawer';
import { useTranslations } from 'next-intl';

import { CardDrawerItem } from './CardDraweItem';

import { useCartDrawerOpened } from '@/lib/hooks/useCartDrawerOpened';

export const CartDrawer = () => {
  const [cartOpened, setCartOpened] = useCartDrawerOpened();
  const t = useTranslations('cart');

  return (
    <Drawer isOpen={cartOpened} onOpenChange={setCartOpened}>
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1">
              {t('drawerTitle')}
            </DrawerHeader>
            <DrawerBody>
              <CardDrawerItem />
            </DrawerBody>
            <DrawerFooter>
              <Button color="secondary" onPress={onClose}>
                Przejdź do koszyka
              </Button>
              <Button color="primary" onPress={onClose}>
                Złóż zamówienie
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

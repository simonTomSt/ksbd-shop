'use client';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Button, ButtonProps } from '@heroui/button';

import { pathnames } from '@/lib/config/pathnames';
import { useCartDrawerOpened } from '@/lib/hooks/useCartDrawerOpened';
import { UILink } from '@/modules/common/UILink';
type CartButtonProps = ButtonProps;

export const CartDrawerButton = (props: CartButtonProps) => {
  const [, setCartOpened] = useCartDrawerOpened();

  return (
    <Button
      isIconOnly
      aria-label="shopping cart"
      as={UILink}
      href={pathnames.account.path}
      variant="light"
      onPress={() => setCartOpened(true)}
      {...props}
    >
      <ShoppingCartIcon className="w-6 h-6" />
    </Button>
  );
};

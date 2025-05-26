'use client';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Button, ButtonProps } from '@heroui/button';
import { cn } from '@heroui/theme';
import { useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { addToCartAction } from '../../api/addToCartAction';

type AddToCartButtonProps = ButtonProps & {
  productVariantId: string;
  quantity: number;
  className?: string;
};

export const AddToCartButton = ({
  productVariantId,
  quantity,
  className,
  ...props
}: AddToCartButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('cart');

  const handleClick = () => {
    startTransition(async () => {
      await addToCartAction(productVariantId, quantity);
    });
  };

  return (
    <Button className={cn(className)} {...props} onPress={handleClick} isLoading={isPending}>
      <ShoppingBagIcon className="w-5 h-5" />
      {t('addToCart')}
    </Button>
  );
};

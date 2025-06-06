'use client';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Button, ButtonProps } from '@heroui/button';
import { cn } from '@heroui/theme';
import { useTransition } from 'react';
import { addToCartAction } from '../../api/addToCartAction';
type AddToCartIconButtonProps = ButtonProps & {
  productVariantId: string;
  quantity: number;
  className?: string;
};

export const AddToCartIconButton = ({
  productVariantId,
  quantity,
  className,
  ...props
}: AddToCartIconButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await addToCartAction(productVariantId, quantity);
    });
  };

  return (
    <Button
      isIconOnly
      className={cn(className)}
      {...props}
      onPress={handleClick}
      isLoading={isPending}
    >
      <ShoppingBagIcon className="w-5 h-5" />
    </Button>
  );
};

'use client';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Button, ButtonProps } from '@heroui/button';
import { cn } from '@heroui/theme';

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
  return (
    <Button isIconOnly className={cn(className)} {...props}>
      <ShoppingBagIcon className="w-5 h-5" />
    </Button>
  );
};

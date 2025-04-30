'use client';
import { HeartIcon } from '@heroicons/react/24/outline';
// import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Button, ButtonProps } from '@heroui/button';
import { cn } from '@heroui/theme';

// type AddToCartIconButtonProps = ButtonProps & {
//   productVariantId: string;
//   quantity: number;
//   className?: string;
// };

type AddToWishlistButtonProps = ButtonProps;

export const AddToWishlistButton = ({ className, ...props }: AddToWishlistButtonProps) => {
  return (
    <Button isIconOnly className={cn(className)} {...props}>
      <HeartIcon className="w-5 h-5" />
      {/* <HeartSolidIcon className="w-5 h-5 text-primary" /> */}
    </Button>
  );
};

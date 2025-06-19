'use client';
import { useAuth } from '@/modules/providers/AuthProvider';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Button, ButtonProps } from '@heroui/button';
import { cn } from '@heroui/theme';
import { useWishlist } from '../providers/WhishlistProvider';
import { addToWishlistAction } from '../utils/addToWhishlistAction';
import { removeFromWishlistAction } from '../utils/removeFromWhishlistAction';

// type AddToCartIconButtonProps = ButtonProps & {
//   productVariantId: string;
//   quantity: number;
//   className?: string;
// };

type AddToWishlistButtonProps = ButtonProps & {
  productId: string;
};

export const AddToWishlistButton = ({
  className,
  productId,
  ...props
}: AddToWishlistButtonProps) => {
  const { currentCustomer } = useAuth();
  const { checkIfProductIsInWishlist } = useWishlist();
  const isInWishlist = checkIfProductIsInWishlist(productId);

  console.log('isInWishlist', isInWishlist);

  const handleClick = () => {
    const userId = currentCustomer?.id || 'unknown';

    if (isInWishlist) {
      removeFromWishlistAction(productId, userId);
      return;
    }

    addToWishlistAction(productId, userId);
  };

  return (
    <Button isIconOnly className={cn(className)} {...props} onPress={handleClick}>
      {isInWishlist ? (
        <HeartSolidIcon className="w-5 h-5 text-primary" />
      ) : (
        <HeartIcon className="w-5 h-5" />
      )}
    </Button>
  );
};

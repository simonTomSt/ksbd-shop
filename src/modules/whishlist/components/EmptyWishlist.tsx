import { pathnames } from '@/lib/config/pathnames';
import { UILink } from '@/modules/common/UILink';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import { cn } from '@heroui/theme';
import { useTranslations } from 'next-intl';

type EmptyWishlistProps = {
  className?: string;
};

export const EmptyWishlist = ({ className }: EmptyWishlistProps) => {
  const t = useTranslations('products.noProductsFound');

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center py-16 px-4 text-center text-foreground-600',
        className,
      )}
    >
      <HeartIcon className="h-16 w-16 mb-4 text-foreground-300" />
      <h3 className="text-xl font-semibold mb-2 text-foreground-700">Your wishlist is empty</h3>
      <p className="text-foreground-500 mb-6 max-w-md">
        Start adding products you love to your wishlist
      </p>
      <UILink href={{ pathname: pathnames.shop.path }}>
        <Button color="primary" size="lg">
          Browse Products
        </Button>
      </UILink>
    </div>
  );
};

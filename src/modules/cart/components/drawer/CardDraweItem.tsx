'use client';

import { Button } from '@heroui/button';
import { Image } from '@heroui/image';
import { Link } from '@heroui/link';
import { CartItem } from '../../api/getCartAction';

type CardDrawerItemProps = {
  item: CartItem;
};

export const CardDrawerItem = ({ item }: CardDrawerItemProps) => {
  return (
    <article className="flex gap-4 py-4 border-b border-divider">
      <div className="w-20 h-20 flex-shrink-0">
        <Image
          src={item.productVariant.product.featuredAsset?.preview || '/placeholder.png'}
          alt={item.productVariant.product.name}
          className="object-cover rounded-lg w-full h-full"
          width={80}
          height={80}
        />
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <Link
          href={`/products/${item.productVariant.product.slug}`}
          className="text-sm font-medium hover:underline"
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
              className="h-6 w-6"
              aria-label="Decrease quantity"
            >
              -
            </Button>
            <span className="text-sm">{item.quantity}</span>
            <Button
              size="sm"
              variant="flat"
              isIconOnly
              className="h-6 w-6"
              aria-label="Increase quantity"
            >
              +
            </Button>
          </div>
          <p className="text-sm font-medium">
            {(item.productVariant.price * item.quantity).toFixed(2)} zł
          </p>
        </div>
      </div>
    </article>
  );
};

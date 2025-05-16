import { pathnames } from '@/lib/config/pathnames';
import { Product } from '@/lib/shop-api/graphql';
import { AddToCartIconButton } from '@/modules/cart/components/add-to-cart/AddToCartIconButton';
import { Amount } from '@/modules/common/Amount';
import { UILink } from '@/modules/common/UILink';
import { AddToWishlistButton } from '@/modules/whishlist/components/AddToWishlistButton';
import { Card, CardBody } from '@heroui/card';
import { Image } from '@heroui/image';
import { cn } from '@heroui/theme';
import NextImage from 'next/image';
import { getProductImage } from '../utils/getProductImage';

export interface ProductTileProps {
  product: Product;
  className?: string;
}

export const ProductTile = ({ product, className }: ProductTileProps) => {
  const { name, slug, variants } = product;
  const imageUrl = getProductImage(product);

  const [productVariant] = variants;

  return (
    <UILink
      href={{
        pathname: pathnames.productDetails.path,
        params: { slug },
      }}
      className={cn('block w-full', className)}
    >
      <Card
        isPressable
        as="article"
        radius="sm"
        shadow="sm"
        className="overflow-hidden hover:shadow-md transition-shadow w-full group relative"
      >
        <CardBody className="overflow-visible p-0">
          <div className="flex w-full gap-2">
            <div className="relative aspect-w-1 aspect-h-1">
              <Image
                isBlurred
                as={NextImage}
                alt={name}
                className="w-full object-cover h-[240px]"
                height={140}
                width={236}
                src={imageUrl}
                radius="none"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold line-clamp-1">{name}</h3>
              <div className="flex justify-between w-full items-center mt-2">
                <Amount className="text-lg" value={productVariant.priceWithTax} />
              </div>
            </div>
          </div>
        </CardBody>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 flex flex-col gap-3">
          <AddToWishlistButton color="secondary" productId={productVariant.id} />
          <AddToCartIconButton
            color="secondary"
            productVariantId={productVariant.id}
            quantity={1}
          />
        </div>
      </Card>
    </UILink>
  );
};

import { pathnames } from '@/lib/config/pathnames';
import { isSinglePrice } from '@/lib/shop-api/graphql';
import { AddToCartIconButton } from '@/modules/cart/components/add-to-cart/AddToCartIconButton';
import { Amount } from '@/modules/common/Amount';
import { PureLink } from '@/modules/common/PureLink';
import { Card } from '@heroui/card';
import { Image } from '@heroui/image';
import NextImage from 'next/image';
import { searchProducts } from '../api/searchProducts';

type SearchProductCardProps = {
  product: Awaited<ReturnType<typeof searchProducts>>['items'][number];
};

export const SearchProductCard = ({ product }: SearchProductCardProps) => {
  return (
    <PureLink
      href={{
        pathname: pathnames.productDetails.path,
        params: { slug: product.slug },
      }}
      className="w-full block group"
    >
      <Card isPressable as="article" isHoverable shadow="none" className="w-full relative">
        <div className="flex items-center gap-2">
          <Image
            as={NextImage}
            src={product.productAsset?.preview ?? ''}
            alt={product.productVariantName}
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-1 items-start">
            <p className="text-base font-medium">{product.productVariantName}</p>
            {isSinglePrice(product.priceWithTax) && <Amount value={product.priceWithTax.value} />}
          </div>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <AddToCartIconButton
            color="secondary"
            productVariantId={product.productVariantId}
            quantity={1}
          />
        </div>
      </Card>
    </PureLink>
  );
};

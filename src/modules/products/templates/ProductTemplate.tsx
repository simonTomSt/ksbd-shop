import { AddToCartButton } from '@/modules/cart/components/add-to-cart/AddToCartButton';
import { Amount } from '@/modules/common/Amount';
import { AddToWishlistButton } from '@/modules/whishlist/components/AddToWishlistButton';
import { Tooltip } from '@heroui/tooltip';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../api/getProduct';

interface ProductTemplateProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function ProductTemplate({ params }: ProductTemplateProps) {
  const { slug } = await params;

  const [product, t] = await Promise.all([getProduct(slug), getTranslations('productDetails')]);

  if (!product) {
    notFound();
  }

  const mainImage = product.featuredAsset?.preview || '/placeholder.png';
  const price = product.variants[0]?.priceWithTax;

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6 px-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          {price && (
            <div>
              <Amount withTax value={price} className="text-2xl font-semibold text-primary" />
            </div>
          )}

          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: product.description || '' }} />
          </div>

          {/* Variants */}
          {product.variants.length > 1 ? (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{t('availableVariants')}</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.variants.map((variant) => (
                  <div
                    key={variant.id}
                    className="border rounded-lg p-4 hover:border-primary cursor-pointer"
                  >
                    <p className="font-medium">
                      {variant.options?.map((option) => option.name).join(', ') ?? variant.name}
                    </p>
                    <Amount withTax value={variant.priceWithTax} className="text-primary" />
                    <p className="text-sm text-gray-500">
                      {variant.stockLevel === 'IN_STOCK' ? t('inStock') : t('outOfStock')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              {product.variants[0].stockLevel === 'IN_STOCK' ? t('inStock') : t('outOfStock')}
            </p>
          )}

          <div className="flex gap-2">
            <AddToCartButton
              productVariantId={product.variants[0].id}
              quantity={1}
              color="primary"
              size="lg"
              className="w-full max-w-[300px]"
            />
            <Tooltip content={t('addToWishlist')}>
              <AddToWishlistButton productId={product.variants[0].id} size="lg" />
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Additional Product Details */}
      <div className="py-12 bg-default-100 rounded">
        <div className="max-w-3xl ">
          <h2 className="text-2xl font-bold mb-6">{t('productDetails')}</h2>
          <div
            className="prose prose-lg max-w-none 
                [&_table]:w-full 
                [&_table]:border-collapse 
                [&_th]:bg-gray-100 
                [&_th]:p-4
                [&_th]:text-left 
                [&_td]:p-2
                [&_tr]:border-b 
                [&_tr]:border-gray-200 
                [&_tr:hover]:bg-gray-50
                [&_p]:my-2
                [&_p]:text-gray-600
                [&_ul]:list-disc
                [&_ul]:pl-6
                [&_ul]:pt-1
                [&_ol]:list-decimal
                [&_ol]:pl-6
                [&_li]:my-2
                [&_li]:text-gray-600
                [&_h1]:text-4xl
                [&_h1]:font-bold
                [&_h1]:text-foreground
                [&_h1]:my-8
                [&_h2]:text-3xl
                [&_h2]:font-bold
                [&_h2]:text-foreground
                [&_h2]:my-6
                [&_h3]:text-2xl
                [&_h3]:font-bold
                [&_h3]:text-foreground
                [&_h3]:my-5
                [&_h4]:text-lg
                [&_h4]:font-medium
                [&_h4]:text-foreground
                [&_h4]:pt-4
                [&_h4]:pb-1
                [&_h6]:pt-2
                [&_h6]:mt-0
                [&_a]:text-primary
                [&_a]:hover:text-primary/80
                [&_a]:underline
                [&_a]:decoration-2
                [&_a]:underline-offset-2
                [&_blockquote]:border-l-4
                [&_blockquote]:border-gray-300
                [&_blockquote]:pl-6
                [&_blockquote]:italic
                [&_blockquote]:text-gray-600
                [&_blockquote]:my-6
                [&_code]:bg-gray-100
                [&_code]:px-2
                [&_code]:py-1
                [&_code]:rounded
                [&_code]:text-sm
                [&_pre]:bg-gray-100
                [&_pre]:p-6
                [&_pre]:rounded-lg
                [&_pre]:overflow-x-auto
                [&_pre]:my-6
                [&_img]:max-w-full
                [&_img]:rounded-lg
                [&_img]:my-8
                [&_img]:shadow-md"
            dangerouslySetInnerHTML={{
              __html: product.variants[0].customFields?.description || '',
            }}
          />
        </div>
      </div>
    </div>
  );
}

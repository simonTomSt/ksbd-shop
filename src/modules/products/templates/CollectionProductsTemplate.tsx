import { Product } from '@/lib/shop-api/graphql';
import { getTranslations } from 'next-intl/server';
import { getCollectionWithProducts } from '../api/getCollectionWithProducts';
import { ListTypeToggler } from '../components/ListTypeToggler';
import { NoProductsFound } from '../components/NoProductsFound';
import { ProductsGridList } from '../components/ProductsGridList';
import { ProductsWideList } from '../components/ProductsWideList';
import { getProductsListType } from '../utils/getPorductsListType';

interface CollectionProductsTemplateProps {
  params: Promise<{
    collection: string;
  }>;
}

export const CollectionProductsTemplate = async ({ params }: CollectionProductsTemplateProps) => {
  const { collection: collectionSlug } = await params;
  const [t, collection, listType] = await Promise.all([
    getTranslations('products'),
    getCollectionWithProducts({
      slug: collectionSlug,
      productOptions: {
        skip: 0,
        take: 20,
      },
    }),
    getProductsListType(),
  ]);

  console.log(collectionSlug);
  const products = collection?.productVariants.items.map((variant) => variant.product) as Product[];

  if (!collection || products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <NoProductsFound />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/4">
          <div className="flex mb-6 items-center justify-between">
            <h1 className="text-2xl font-bold">{collection.name}</h1>
            <ListTypeToggler listType={listType} />
          </div>
          {listType === 'grid' ? (
            <ProductsGridList products={products} />
          ) : (
            <ProductsWideList products={products} />
          )}
        </div>
      </div>
    </div>
  );
};

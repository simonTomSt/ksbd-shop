import { Product } from '@/lib/shop-api/graphql';
import { Pagination } from '@heroui/pagination';
import { getTranslations } from 'next-intl/server';
import { getCollectionWithProducts } from '../api/getCollectionWithProducts';
import { NoProductsFound } from '../components/NoProductsFound';
import { ProductsFiltersSidebar } from '../components/ProductsFiltersSidebar';
import { ProductsGridList } from '../components/ProductsGridList';
import { ProductsWideList } from '../components/ProductsWideList';
import { getProductsListType } from '../utils/getPorductsListType';
import { ProductListLayout } from './ProductsListLayout';

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

  const products = collection?.productVariants.items.map((variant) => variant.product) as Product[];

  if (!collection || products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <NoProductsFound />
      </div>
    );
  }

  return (
    <ProductListLayout
      title={collection.name}
      sidebar={<ProductsFiltersSidebar />}
      pagination={
        collection.productVariants.totalItems > 1 ? (
          <Pagination initialPage={1} total={collection.productVariants.totalItems ?? 0} />
        ) : null
      }
    >
      {listType === 'grid' ? (
        <ProductsGridList products={products} />
      ) : (
        <ProductsWideList products={products} />
      )}
    </ProductListLayout>
  );
};

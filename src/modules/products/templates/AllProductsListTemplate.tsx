import { getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import { getCollections } from '../api/getCollections';
import { getProducts } from '../api/getProducts';
import { CollectionsSidebar } from '../components/CollectionsSidebar';
import { ListTypeToggler } from '../components/ListTypeToggler';
import { ProductsGridList } from '../components/ProductsGridList';
import { ProductsWideList } from '../components/ProductsWideList';
import { getProductsListType } from '../utils/getPorductsListType';

const getListType = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('productListType')?.value ?? 'grid';
};

export const AllProductsListTemplate = async () => {
  const [t, { products }, collections, listType] = await Promise.all([
    getTranslations('products'),
    getProducts(),
    getCollections(),
    getProductsListType(),
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <CollectionsSidebar collections={collections.items} />
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex mb-6 items-center justify-between">
            <h1 className="text-2xl font-bold">{t('allProducts.title')}</h1>
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

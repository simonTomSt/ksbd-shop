import { getTranslations } from 'next-intl/server';
import { getCollections } from '../api/getCollections';
import { getProducts } from '../api/getProducts';
import { CollectionsSidebar } from '../components/CollectionsSidebar';
import { ProductsGridList } from '../components/ProductsGridList';

export const AllProductsListTemplate = async () => {
  const [t, { products }, collections] = await Promise.all([
    getTranslations('products'),
    getProducts(),
    getCollections(),
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <CollectionsSidebar collections={collections.items} />
        </div>

        <div className="w-full md:w-3/4">
          <h1 className="text-2xl font-bold mb-6">{t('allProducts.title')}</h1>
          <ProductsGridList products={products} cols={3} />
        </div>
      </div>
    </div>
  );
};

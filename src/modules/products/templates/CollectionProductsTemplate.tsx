import { getTranslations } from 'next-intl/server';

export const CollectionProductsTemplate = async () => {
  const [t] = await Promise.all([getTranslations('products')]);

  return <div>CollectionProductsTemplate</div>;
};

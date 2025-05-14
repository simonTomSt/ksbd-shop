import { Product } from '@/lib/shop-api/graphql/schema';

export const getProductImage = (product: Product) => {
  return (
    product.featuredAsset?.source ||
    product.featuredAsset?.preview ||
    product.assets?.[0]?.preview ||
    product.assets?.[0]?.source ||
    '/images/product-placeholder.png'
  );
};

import { Product } from '@/lib/shop-api/graphql/schema';
import { ProductTile } from './ProductTile';

interface ProductsWideListProps {
  products: Product[];
}

export const ProductsWideList = ({ products }: ProductsWideListProps) => {
  return (
    <div className="flex flex-col w-full gap-6">
      {products.map((product) => (
        <ProductTile key={product.id} product={product} />
      ))}
    </div>
  );
};

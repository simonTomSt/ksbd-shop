import { Product } from '@/lib/shop-api/graphql/schema';
import { ProductCard } from './ProductCard';

interface ProductsGridListProps {
  products: Product[];
}

export const ProductsGridList = ({ products }: ProductsGridListProps) => {
  return (
    <div className={`grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} className="max-w-[336px]" />
      ))}
    </div>
  );
};

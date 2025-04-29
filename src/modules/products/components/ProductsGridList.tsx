import { ProductCard, ProductCardProps } from './ProductCard';

// Define Products Grid List props interface
interface ProductsGridListProps {
  products: ProductCardProps['product'][];
  cols?: number;
}

export const ProductsGridList = ({ products, cols = 3 }: ProductsGridListProps) => {
  return (
    <div
      className={`grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols} gap-6`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} className="md:max-w-full max-w-[336px]" />
      ))}
    </div>
  );
};

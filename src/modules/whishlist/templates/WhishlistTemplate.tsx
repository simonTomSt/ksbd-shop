import { Product } from '@/lib/shop-api/graphql';
import { ProductsGridList } from '@/modules/products/components/ProductsGridList';
import { ProductListLayout } from '@/modules/products/templates/ProductsListLayout';
import { getTranslations } from 'next-intl/server';
import { getWishlistProducts } from '../api/getWishlistProducts';
import { EmptyWishlist } from '../components/EmptyWishlist';
import { getWishlist } from '../utils/getWishlist';

export const WhishlistTemplate = async () => {
  try {
    const [t, wishlistProductIds] = await Promise.all([
      getTranslations('header.navLinks'),
      getWishlist(),
    ]);

    // Return early if wishlist is empty
    if (!wishlistProductIds || wishlistProductIds.length === 0) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">{t('favorites')}</h1>
          <EmptyWishlist />
        </div>
      );
    }

    // Fetch the actual products
    const wishlistProducts = await getWishlistProducts(wishlistProductIds);

    // Filter out any null/undefined products and ensure they're valid
    const validProducts = wishlistProducts.filter(
      (product): product is Product => product && typeof product === 'object' && 'id' in product,
    );

    // Handle case where products might not be found (deleted products, etc.)
    if (validProducts.length === 0) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">{t('favorites')}</h1>
          <EmptyWishlist />
        </div>
      );
    }

    return (
      <ProductListLayout
        title={
          <div className="flex items-center gap-2">
            <span>{t('favorites')}</span>
            <span className="text-sm text-foreground-500 font-normal">
              ({validProducts.length} {validProducts.length === 1 ? 'item' : 'items'})
            </span>
          </div>
        }
        sidebar={
          <div className="space-y-4">
            <div className="border border-foreground-200 rounded-lg p-4">
              <h3 className="font-semibold text-foreground-700 mb-2">About Wishlist</h3>
              <p className="text-sm text-foreground-500">
                Save products you love and come back to them later. Your wishlist is synced across
                all your devices.
              </p>
            </div>
            {wishlistProductIds.length !== validProducts.length && (
              <div className="border border-warning-200 bg-warning-50 rounded-lg p-4">
                <h4 className="font-medium text-warning-700 mb-1">Note</h4>
                <p className="text-sm text-warning-600">
                  Some products in your wishlist are no longer available and have been hidden.
                </p>
              </div>
            )}
          </div>
        }
        pagination={null}
      >
        <ProductsGridList products={validProducts} />
      </ProductListLayout>
    );
  } catch (error) {
    console.error('Error loading wishlist:', error);

    // Fallback error state
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Favorites</h1>
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <p className="text-foreground-600 mb-4">
            We're having trouble loading your wishlist right now.
          </p>
          <p className="text-sm text-foreground-500">
            Please try refreshing the page or come back later.
          </p>
        </div>
      </div>
    );
  }
};

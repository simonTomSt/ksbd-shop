import { createContext, ReactNode, useContext } from 'react';

interface WishlistContextType {
  wishlist: string[];
  checkIfProductIsInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

interface WishlistProviderProps {
  children: ReactNode;
  wishlist: string[];
}

export const WishlistProvider = ({ children, wishlist }: WishlistProviderProps) => {
  const checkIfProductIsInWishlist = (productId: string) => {
    return wishlist.includes(productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, checkIfProductIsInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

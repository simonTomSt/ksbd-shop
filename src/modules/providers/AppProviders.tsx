'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { Customer } from '@/lib/shop-api/graphql';
import { WishlistProvider } from '../whishlist/providers/WhishlistProvider';
import { AuthProvider } from './AuthProvider';
import { UIProvider } from './UIPovider';

type AppProvidersProps = {
  children: React.ReactNode;
  locale: string;
  authToken?: string | null;
  currentCustomer?: Customer | null | undefined;
  wishlist?: string[];
};

export const AppProviders = ({
  children,
  locale,
  currentCustomer,
  wishlist = [],
}: AppProvidersProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <UIProvider
          locale={`${locale}-${locale.toUpperCase()}`}
          themeProps={{ attribute: 'class', defaultTheme: 'light' }}
        >
          <AuthProvider currentCustomer={currentCustomer}>
            <WishlistProvider wishlist={wishlist}>{children}</WishlistProvider>
          </AuthProvider>
        </UIProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
};

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { AuthProvider } from './AuthProvider';
import { UIProvider } from './UIPovider';

type AppProvidersProps = {
  children: React.ReactNode;
  locale: string;
  authToken?: string | null;
};

export const AppProviders = ({ children, locale, authToken }: AppProvidersProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <UIProvider
          locale={`${locale}-${locale.toUpperCase()}`}
          themeProps={{ attribute: 'class', defaultTheme: 'light' }}
        >
          <AuthProvider token={authToken}>{children}</AuthProvider>
        </UIProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
};

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { UIProvider } from './UIPovider';

type AppProvidersProps = {
  children: React.ReactNode;
  locale: string;
};

export const AppProviders = ({ children, locale }: AppProvidersProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <UIProvider
          locale={`${locale}-${locale.toUpperCase()}`}
          themeProps={{ attribute: 'class', defaultTheme: 'light' }}
        >
          {children}
        </UIProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
};

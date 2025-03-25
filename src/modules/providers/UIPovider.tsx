'use client';
import { HeroUIProvider } from '@heroui/system';
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes';

import { useRouter } from '@/lib/i18n/navigation';

type Props = {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  locale?: string;
};

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >;
  }
}

export const UIProvider = ({ children, themeProps, locale }: Props) => {
  const router = useRouter();

  return (
    <HeroUIProvider locale={locale} navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
};

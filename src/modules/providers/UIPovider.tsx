'use client';
import { useRouter } from '@/lib/i18n/navigation';
import { HeroUIProvider } from '@heroui/system';
import { ToastProvider } from '@heroui/toast';
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes';

type Props = {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  locale?: string;
};

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>;
  }
}

export const UIProvider = ({ children, themeProps, locale }: Props) => {
  const router = useRouter();

  return (
    <HeroUIProvider locale={locale} navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <ToastProvider placement="top-right" />

        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
};

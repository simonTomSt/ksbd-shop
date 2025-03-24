'use client';
import { useRouter } from '@/lib/i18n/navigation';
import { HeroUIProvider } from '@heroui/system';
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes';

type Props = {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
};
export const UIProvider = ({ children, themeProps }: Props) => {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
};

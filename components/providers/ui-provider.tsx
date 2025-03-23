'use client';
import { HeroUIProvider } from '@heroui/system';
import { ThemeProviderProps } from 'next-themes';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

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

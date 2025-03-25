'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      aria-label="shopping cart"
      size="lg"
      variant="light"
      onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </Button>
  );
};

'use client';
import {
  HeartIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import { Divider } from '@heroui/divider';
import { User } from '@heroui/user';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { SearchInput } from '../../search/components/SearchInput';

import { pathnames } from '@/lib/config/pathnames';
import { useIsPathActive } from '@/lib/hooks/useIsPathActive';
import { CartDrawerButton } from '@/modules/cart/components/drawer/CartDrawerButton';
import { UILink } from '@/modules/common/UILink';

const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
  ssr: false,
  loading: () => (
    <Button
      disabled
      isIconOnly
      aria-label="shopping cart"
      size="lg"
      variant="light"
    />
  ),
});

export const TopBar = () => {
  const checkIsPathActive = useIsPathActive();

  return (
    <div className="hidden sm:flex z-40 w-full h-auto items-center justify-center top-0 inset-x-0 border-b border-divider backdrop-blur-lg backdrop-saturate-150 bg-background/70">
      <div className="flex justify-between container mx-auto max-w-7xl px-6 h-[90px] lg:grid grid-cols-3 items-center">
        <div className="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border pr-4">
          <UILink href="/">
            <Image alt="logo" height={100} src="/images/logo.png" width={150} />
          </UILink>
        </div>

        <div className="justify-center hidden md:flex">
          <SearchInput />
        </div>

        <div className="flex justify-end items-center">
          <div className="hidden md:block min-w-[132px]">
            <User
              avatarProps={{
                fallback: <UserIcon className="w-6 h-6" />,
                classNames: {
                  base: 'bg-transparent',
                },
              }}
              description={
                <UILink href={pathnames.account.path} size="sm">
                  <span className="font-medium">Zaloguj się</span>
                </UILink>
              }
              name="Panel klienta"
            />
          </div>

          <Button
            isIconOnly
            aria-label="shopping cart"
            as={UILink}
            className="md:hidden"
            href={pathnames.account.path}
            size="lg"
            variant="light"
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </Button>
          <Button
            isIconOnly
            aria-label="shopping cart"
            as={UILink}
            className="md:hidden"
            href={pathnames.signIn.path}
            size="lg"
            variant="light"
          >
            <UserIcon className="w-6 h-6" />
          </Button>

          <div className="h-9 px-0 md:px-4">
            <Divider orientation="vertical" />
          </div>

          <ThemeSwitcher />

          <Button
            isIconOnly
            aria-label="shopping cart"
            as={UILink}
            color={
              checkIsPathActive(pathnames.favorites.path)
                ? 'primary'
                : 'default'
            }
            href={pathnames.favorites.path}
            size="lg"
            variant="light"
          >
            <HeartIcon className="w-6 h-6" />
          </Button>

          <CartDrawerButton size="lg" />
        </div>
      </div>
    </div>
  );
};

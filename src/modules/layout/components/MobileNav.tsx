'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/navbar';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { CartDrawerButton } from '../../cart/components/drawer/CartDrawerButton';
import { SearchButton } from '../../search/components/SearchButton';
import { getMobileNavLinks } from '../utils/getNavLinks';

import { useIsPathActive } from '@/lib/hooks/useIsPathActive';
import { UILink } from '@/modules/common/UILink';

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MobileNav = () => {
  const t = useTranslations('header.navLinks');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navLinks = getMobileNavLinks(t);
  const checkActivePath = useIsPathActive();

  return (
    <Navbar
      isBordered
      classNames={{
        base: 'sm:hidden',
      }}
      height="86px"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <UILink href="/">
            <Image alt="logo" height={100} src="/images/logo.png" width={120} />
          </UILink>
        </NavbarBrand>

        <div className="flex gap-1 mr-2">
          <SearchButton size="md" />
          <CartDrawerButton size="md" />
        </div>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {navLinks.map((item, index) => {
          const isActive = checkActivePath(item.path);

          return (
            <NavbarMenuItem key={`${item}-${index}`} isActive={isActive}>
              <UILink
                className="w-full"
                color={isActive ? 'primary' : 'foreground'}
                href={item.path}
                size="lg"
              >
                <span className="flex items-center gap-2">
                  {item.Icon && <item.Icon className="w-6 h-6" />}
                  {item.label}
                </span>
              </UILink>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

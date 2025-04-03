'use client';

import { Navbar, NavbarContent, NavbarItem } from '@heroui/navbar';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { getNavLinks } from '../utils/getNavLinks';

import { pathnames } from '@/lib/config/pathnames';
import { usePathname } from '@/lib/i18n/navigation';
import { UILink } from '@/modules/common/UILink';

export const Nav = () => {
  const t = useTranslations('header.navLinks');
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const navLinks = getNavLinks(t);

  return (
    <Navbar
      isBordered
      classNames={{
        base: 'hidden sm:flex',
        menuItem: ['hover:text-primary'],
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:top-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[3px]',
          'data-[active=true]:after:bg-primary',
          'data-[active=true]:after:rounded-b',
        ],
      }}
      maxWidth="xl"
      position="static"
    >
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks.map((link) => {
          const active = isActive(link.path);

          return (
            <NavbarItem key={link.path} isActive={active}>
              <UILink
                color={active ? 'primary' : 'foreground'}
                href={link.path}
                isBlock={!active}
              >
                {link.label}
              </UILink>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="center">
        <UILink isBlock color="foreground" href={pathnames.ue.path} size="sm">
          <Image
            alt="logo"
            className="dark:brightness-75 dark:contrast-125 rounded"
            height={40}
            src="/images/ue-logo-white.jpg"
            width={130}
          />
        </UILink>
      </NavbarContent>
    </Navbar>
  );
};

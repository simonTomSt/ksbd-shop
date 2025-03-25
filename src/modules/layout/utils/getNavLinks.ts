import { HeartIcon, UserIcon } from '@heroicons/react/24/outline';

import { pathnames } from '@/lib/config/pathnames';
import { TFunction } from '@/lib/i18n/types';

export const getNavLinks = (t: TFunction) => [
  {
    label: t('shop'),
    path: pathnames.shop.path,
  },
  {
    label: t('ksbd'),
    path: pathnames.ksbd.path,
  },
  {
    label: t('about'),
    path: pathnames.aboutUs.path,
  },
  {
    label: t('contact'),
    path: pathnames.contact.path,
  },
];

export const getMobileNavLinks = (t: TFunction) => [
  {
    label: t('shop'),
    path: pathnames.shop.path,
  },
  {
    label: t('ksbd'),
    path: pathnames.ksbd.path,
  },
  {
    label: t('about'),
    path: pathnames.aboutUs.path,
  },
  {
    label: t('contact'),
    path: pathnames.contact.path,
  },
  {
    Icon: HeartIcon,
    label: t('favorites'),
    path: pathnames.favorites.path,
  },
  {
    Icon: UserIcon,
    label: t('account'),
    path: pathnames.account.path,
  },
];

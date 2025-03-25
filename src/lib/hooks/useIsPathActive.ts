import { usePathname } from '../i18n/navigation';

export const useIsPathActive = () => {
  const pathname = usePathname();
  const checkActivePath = (path: string) => pathname === path;

  return checkActivePath;
};

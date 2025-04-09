import { pathnames } from '@/lib/config/pathnames';
import { redirect } from '@/lib/i18n/navigation';
import { getLocale } from 'next-intl/server';
import { getCurrentCustomer } from '../api/getCurrentCustomer';

export const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentCustomer = await getCurrentCustomer();
  const locale = await getLocale();

  if (currentCustomer) {
    return redirect({
      href: pathnames.home.path,
      locale,
    });
  }

  return <div className="max-w-[576px] mx-auto">{children}</div>;
};

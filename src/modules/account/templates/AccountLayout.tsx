import { pathnames } from '@/lib/config/pathnames';
import { redirect } from '@/lib/i18n/navigation';
import { getCurrentCustomer } from '@/modules/auth/api/getCurrentCustomer';
import { getLocale } from 'next-intl/server';

export const AccountLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentCustomer = await getCurrentCustomer();
  const locale = await getLocale();

  if (!currentCustomer) {
    return redirect({
      href: pathnames.signIn.path,
      locale,
    });
  }

  return <div>{children}</div>;
};

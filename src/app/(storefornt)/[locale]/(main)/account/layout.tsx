import { getLocale } from 'next-intl/server'

import { pathnames } from '@/lib/config/pathnames'
import { redirect } from '@/lib/i18n/navigation'

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode
  auth: React.ReactNode
}) {
  // const currentUser = await getCurrentUser();
  const locale = await getLocale()

  if (!false) {
    redirect({
      href: pathnames.signIn.path,
      locale: locale,
    })
  }

  return children
}

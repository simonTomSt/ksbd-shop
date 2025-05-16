import '@/lib/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { redirect } from 'next/navigation';

import { routing } from '@/lib/i18n/routing';
import { fontSans } from '@/lib/styles/fonts';
import { getCurrentCustomer } from '@/modules/auth/api/getCurrentCustomer';
import { AppProviders } from '@/modules/providers/AppProviders';
import { getWishlist } from '@/modules/whishlist/utils/getWishlist';

export const metadata: Metadata = {
  title: {
    default: 'KSBD – Kompleksowy System Budowy Domu | Nowoczesne Materiały Budowlane Przyszłości',
    template: `%s - Ksbd.pl`,
  },
  description: 'KSBD – Kompleksowy System Budowy Domu | Nowoczesne Materiały Budowlane Przyszłości',
  icons: {
    icon: '/images/logo-compact.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function AppLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    redirect(routing.defaultLocale);
  }

  const currentCustomer = await getCurrentCustomer();
  const wishlist = await getWishlist();

  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}>
        <NextIntlClientProvider locale={locale}>
          <AppProviders locale={locale} currentCustomer={currentCustomer} wishlist={wishlist}>
            {children}
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

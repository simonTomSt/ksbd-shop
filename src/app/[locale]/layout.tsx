import '@/lib/styles/globals.css';
import clsx from 'clsx';
import { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { UIProvider } from '@/components/providers/ui-provider';
import { routing } from '@/lib/i18n/routing';
import { fontSans } from '@/lib/styles/fonts';

export const metadata: Metadata = {
  title: {
    default: 'Ksbd.pl',
    template: `%s - Ksbd.pl`,
  },
  description: 'Ksbd.pl',
  icons: {
    icon: '/favicon.ico',
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
    notFound();
  }

  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider locale={locale}>
          <UIProvider themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
          </UIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

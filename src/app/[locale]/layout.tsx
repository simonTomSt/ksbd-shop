import '@/lib/styles/globals.css';
import clsx from 'clsx';
import { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { redirect } from 'next/navigation';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { routing } from '@/lib/i18n/routing';
import { fontSans } from '@/lib/styles/fonts';
import { UIProvider } from '@/modules/providers/UIPovider';

export const metadata: Metadata = {
  title: {
    default:
      'KSBD – Kompleksowy System Budowy Domu | Nowoczesne Materiały Budowlane Przyszłości',
    template: `%s - Ksbd.pl`,
  },
  description:
    'KSBD – Kompleksowy System Budowy Domu | Nowoczesne Materiały Budowlane Przyszłości',
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

  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <NuqsAdapter>
          <NextIntlClientProvider locale={locale}>
            <UIProvider
              locale={`${locale}-${locale.toUpperCase()}`}
              themeProps={{ attribute: 'class', defaultTheme: 'light' }}
            >
              {children}
            </UIProvider>
          </NextIntlClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}

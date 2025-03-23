import '@/lib/styles/globals.css';
import { Link } from '@heroui/link';
import { Navbar } from '@heroui/navbar';
import clsx from 'clsx';
import { Metadata, Viewport } from 'next';

import { UIProvider } from '@/components/providers/ui-provider';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <UIProvider themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">HeroUI</p>
              </Link>
            </footer>
          </div>
        </UIProvider>
      </body>
    </html>
  );
}

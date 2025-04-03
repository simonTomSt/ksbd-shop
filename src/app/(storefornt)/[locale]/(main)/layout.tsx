import { ShopLayout } from '@/modules/layout/templates/ShopLayout';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ShopLayout>{children}</ShopLayout>;
}

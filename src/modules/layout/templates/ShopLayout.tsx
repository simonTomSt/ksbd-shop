import { CartDrawer } from '../../cart/components/drawer/CartDrawer';
import { SearchModal } from '../../search/components/SearchModal';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Header />
      <main className="app-container pt-10 sm:pt-16 flex-grow">{children}</main>
      <CartDrawer />
      <SearchModal />

      <Footer />
    </div>
  );
};

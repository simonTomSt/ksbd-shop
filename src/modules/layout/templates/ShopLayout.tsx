import { Header } from '../components/Header';

export const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Header />
      <main className="container mx-auto max-w-7xl pt-10 sm:pt-16 px-4 sm:px-6 flex-grow">
        {children}
      </main>
    </div>
  );
};

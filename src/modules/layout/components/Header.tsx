import { MobileNav } from './MobileNav';
import { Nav } from './Nav';
import { TopBar } from './TopBar';

export const Header = () => {
  return (
    <div>
      <TopBar />
      <MobileNav />
      <Nav />
    </div>
  );
};

import Image from 'next/image';

import { pathnames } from '@/lib/config/pathnames';
import { UILink } from '@/modules/common/UILink';

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 mt-24">
      <div className="container mx-auto max-w-7xl px-6 py-32">
        <div className="flex justify-between items-center">
          <Image
            alt="logo"
            height={50}
            src="/images/logo-full.png"
            width={220}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900">
        <div className="max-w-[420px] mx-auto rounded-xl flex justify-center items-center">
          <UILink href={pathnames.ue.path}>
            <Image
              alt="Ue projects logo"
              className="rounded-md dark:opacity-80"
              height={50}
              src="/images/ue-projects-logo-full-white.png"
              width={420}
            />
          </UILink>
        </div>
      </div>
    </footer>
  );
};

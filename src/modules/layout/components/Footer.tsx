import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { PureLink } from '@/modules/common/PureLink';
import { Suspense } from 'react';
import { getFooterSectionLinks } from '../utils/getFooterLinks';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  // Use the header namespace which has translations for navigation items
  const t = useTranslations('footer');
  const footerLinks = getFooterSectionLinks(t);

  return (
    <footer className="bg-zinc-900 mt-24 py-16">
      <div className="app-container px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="lg:w-1/4 mb-6 lg:mb-0">
            <Image alt="logo" height={100} src="/images/logo-full.png" width={320} />
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-white font-bold text-lg mb-5">{t('links.pages.title')}</h3>
              <div className="flex flex-col space-y-3">
                {footerLinks.pages.map((link) => (
                  <PureLink
                    key={link.path}
                    href={link.path}
                    className="text-sm text-gray-500 hover:text-gray-100 transition-colors ease-in-out duration-200"
                  >
                    {link.label}
                  </PureLink>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-5">{t('links.information.title')}</h3>
              <div className="flex flex-col space-y-4">
                {footerLinks.info.map((link) => (
                  <PureLink
                    key={link.path}
                    href={link.path}
                    className="text-sm text-gray-500 hover:text-gray-100 transition-colors ease-in-out duration-200"
                  >
                    {link.label}
                  </PureLink>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 items-start md:items-end justify-between">
              <div>
                <h3 className="text-white font-bold text-lg mb-5">
                  {t('links.socialMedia.title')}
                </h3>
                <SocialLinks className="md:justify-end" />
              </div>
              <Suspense fallback={null}>
                <LanguageSwitcher />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { pathnames } from '@/lib/config/pathnames';
import { TFunction } from '@/lib/i18n/types';
import React from 'react';

export interface FooterLink {
  label: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<{ className?: string }>;
}

export const getFooterSectionLinks = (t: TFunction) => {
  return {
    pages: [
      {
        label: t('links.pages.shop'),
        path: pathnames.shop.path,
      },
      {
        label: t('links.pages.ksbd'),
        path: pathnames.ksbd.path,
      },
      {
        label: t('links.pages.calculator'),
        path: '/calculator',
      },
      {
        label: t('links.pages.about'),
        path: pathnames.aboutUs.path,
      },
      {
        label: t('links.pages.blog'),
        path: '/blog',
      },
      {
        label: t('links.pages.contact'),
        path: pathnames.contact.path,
      },
    ],
    info: [
      {
        label: t('links.information.privacyPolicy'),
        path: pathnames.privacyPolicy.path,
      },
      {
        label: t('links.information.termsOfService'),
        path: pathnames.termsOfService.path,
      },
      {
        label: t('links.information.bankAccount'),
        path: pathnames.bankDetails.path,
      },
      {
        label: t('links.information.chemicalAdditives'),
        path: '/chemicals',
      },
      {
        label: t('links.information.laboratory'),
        path: '/laboratory',
      },
      {
        label: t('links.information.ueProjects'),
        path: pathnames.ue.path,
      },
    ],
  };
};

// export const getFooterSocialLinks = (): SocialLink[] => [
//   {
//     name: 'Facebook',
//     url: 'https://facebook.com',
//     icon: ({ className }) => (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
//         <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
//       </svg>
//     ),
//   },
//   {
//     name: 'Instagram',
//     url: 'https://instagram.com',
//     icon: ({ className }) => (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
//         <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.055-.059 1.37-.059 4.04 0 2.667.01 2.985.059 4.04.044.975.207 1.504.344 1.856.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.046 1.37.058 4.04.058 2.667 0 2.985-.01 4.04-.058.975-.045 1.504-.207 1.856-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.881.344-1.856.046-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.352-.137-.881-.3-1.856-.344-1.055-.047-1.37-.059-4.04-.059zm0 12.136a3.936 3.936 0 1 1 0-7.872 3.936 3.936 0 0 1 0 7.872zm0-10.004a6.068 6.068 0 1 0 0 12.136 6.068 6.068 0 0 0 0-12.136zm7.784-.194a1.416 1.416 0 1 1-2.832 0 1.416 1.416 0 0 1 2.832 0z" />
//       </svg>
//     ),
//   },
//   {
//     name: 'YouTube',
//     url: 'https://youtube.com',
//     icon: ({ className }) => (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
//         <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
//       </svg>
//     ),
//   },
// ];

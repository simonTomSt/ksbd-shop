import type { useTranslations } from 'next-intl';

export type TFunction = ReturnType<typeof useTranslations>;

import messages from './locales/pl.json';

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof messages;
  }
}

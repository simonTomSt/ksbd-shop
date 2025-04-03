import type { useTranslations } from 'next-intl';

export type TFunction<Namespace extends string = string> = ReturnType<
  typeof useTranslations<Namespace>
>;

import messages from './locales/pl.json';

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof messages;
  }
}

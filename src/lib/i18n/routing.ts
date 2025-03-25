import { defineRouting } from 'next-intl/routing';

import { pathnames } from '../config/pathnames';

// Dynamically create the pathnames structure
const localePathnames: Record<string, Record<string, string>> = {};

Object.values(pathnames).forEach((value) => {
  if (value.path) {
    localePathnames[value.path] = {
      pl: value.pl,
      en: value.en,
    };
  }
});

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['pl', 'en'],

  // Used when no locale matches
  defaultLocale: 'pl',

  localeDetection: true,
  pathnames: localePathnames,
});

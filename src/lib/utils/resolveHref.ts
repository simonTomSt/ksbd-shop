import { Url } from 'url';

import { resolveHref as _resolveHref } from 'next/dist/client/resolve-href';
import Router from 'next/router';

export function resolveHref(href: Url) {
  const [, resolvedAs] = _resolveHref(Router, href, true);

  return resolvedAs;
}

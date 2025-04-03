'use client';

import { forwardRef, type ComponentPropsWithRef } from 'react';

import { Link as LocalizedClientLink, useRouter } from '@/lib/i18n/navigation';

export interface PureLinkProps
  extends ComponentPropsWithRef<typeof LocalizedClientLink> {}

export const PureLink = forwardRef<HTMLAnchorElement, PureLinkProps>(
  (props, ref) => {
    const router = useRouter();
    const strHref =
      typeof props.href === 'string'
        ? props.href
        : props.href?.pathname || props.href?.href;

    const conditionalPrefetch = () => {
      if (strHref && props?.prefetch) {
        router.prefetch(strHref);
      }
    };

    return (
      <LocalizedClientLink
        {...props}
        ref={ref}
        prefetch={false}
        onFocus={(e) => {
          conditionalPrefetch();

          return props.onFocus?.(e);
        }}
        onMouseEnter={(e) => {
          conditionalPrefetch();

          return props.onMouseEnter?.(e);
        }}
        onPointerEnter={(e) => {
          conditionalPrefetch();

          return props.onPointerEnter?.(e);
        }}
        onTouchStart={(e) => {
          conditionalPrefetch();

          return props.onTouchStart?.(e);
        }}
      />
    );
  },
);

PureLink.displayName = 'Link';

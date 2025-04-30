'use client';
import { Url } from 'url';

import { LinkProps, useLink } from '@heroui/link';
import { LinkIcon } from '@heroui/shared-icons';
import { linkAnchorClasses } from '@heroui/theme';
import { forwardRef } from 'react';

import { resolveHref } from '../../lib/utils/resolveHref';

import { PureLink, PureLinkProps } from './PureLink';

export type UILinkProps = Omit<LinkProps, 'href'> & PureLinkProps & {};

export const UILink = forwardRef<HTMLAnchorElement, UILinkProps>((props, ref) => {
  const strHref = typeof props.href === 'string' ? props.href : resolveHref(props.href as Url);

  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ...props,
    as: PureLink,
    href: strHref,
    ref,
  });

  return (
    <Component {...getLinkProps()} href={props.href}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

UILink.displayName = 'UILink';

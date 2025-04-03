'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button, ButtonProps } from '@heroui/button';

import { useSearchModalControl } from '../hooks/useSearchModalControl';

import { pathnames } from '@/lib/config/pathnames';
import { UILink } from '@/modules/common/UILink';

type SearchButtonProps = ButtonProps;

export const SearchButton = (props: SearchButtonProps) => {
  const [, setSearchModal] = useSearchModalControl();

  return (
    <Button
      isIconOnly
      aria-label="search products"
      as={UILink}
      href={pathnames.account.path}
      size="lg"
      variant="light"
      onPress={() => setSearchModal(true)}
      {...props}
    >
      <MagnifyingGlassIcon className="w-6 h-6" />
    </Button>
  );
};

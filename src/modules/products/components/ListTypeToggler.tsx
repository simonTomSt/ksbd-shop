'use client';
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { Button, ButtonGroup } from '@heroui/button';
import { toggleProductsListType } from '../utils/toggleProductsListType';

type ListTypeTogglerProps = {
  listType: 'grid' | 'list';
};

export const ListTypeToggler = ({ listType }: ListTypeTogglerProps) => {
  return (
    // <Button isIconOnly size="sm" variant="light" onPress={toggleProductsListType}>
    //   {listType === 'grid' ? (
    //     <Squares2X2Icon className="w-7 h-7" />
    //   ) : (
    //     <ListBulletIcon className="w-7 h-7" />
    //   )}
    // </Button>

    <ButtonGroup isIconOnly size="sm">
      <Button color={listType === 'grid' ? 'primary' : 'default'} onPress={toggleProductsListType}>
        <Squares2X2Icon className="w-6 h-6" />
      </Button>
      <Button color={listType === 'list' ? 'primary' : 'default'} onPress={toggleProductsListType}>
        <ListBulletIcon className="w-6 h-6" />
      </Button>
    </ButtonGroup>
  );
};

'use client';
import { pathnames } from '@/lib/config/pathnames';
import { PureLink } from '@/modules/common/PureLink';
import { Listbox, ListboxItem } from '@heroui/listbox';
import { ScrollShadow } from '@heroui/scroll-shadow';
import { useTranslations } from 'next-intl';
import { getCollections } from '../api/getCollections';

interface CollectionsSidebarProps {
  collections: Awaited<ReturnType<typeof getCollections>>['items'];
}

export const CollectionsSidebar = ({ collections }: CollectionsSidebarProps) => {
  const t = useTranslations('products');

  return (
    <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 h-full">
      <h2 className="text-lg font-semibold px-2">{t('categories')}</h2>
      <ScrollShadow className="max-h-[480px]">
        <Listbox aria-label="Categories">
          {collections.map((collection) => (
            <ListboxItem
              key={collection.id}
              // @ts-ignore
              href={{
                pathname: pathnames.shopCollection.path,
                params: { collection: collection.slug },
              }}
              as={PureLink}
            >
              {collection.name}
            </ListboxItem>
          ))}
        </Listbox>
      </ScrollShadow>
    </div>
  );
};

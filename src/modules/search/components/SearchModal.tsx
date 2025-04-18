'use client';

import { NoProductsFound } from '@/modules/products/components/NoProductsFound';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '@heroui/input';
import { Modal, ModalBody, ModalContent } from '@heroui/modal';
import { ScrollShadow } from '@heroui/scroll-shadow';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import { searchProducts } from '../api/searchProducts';
import { useSearchModalControl } from '../hooks/useSearchModalControl';
import { SearchProductCard } from './SearchProductCard';

export const SearchModal = () => {
  const t = useTranslations('search');
  const [isOpen, setIsOpen] = useSearchModalControl();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounceValue(searchTerm, 300);

  const { data, isFetching } = useQuery({
    queryKey: ['searchProducts', debouncedSearchTerm],
    queryFn: () => searchProducts({ term: debouncedSearchTerm, take: 10 }),
    placeholderData: keepPreviousData,
  });

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <Modal isOpen={isOpen} size="3xl" onOpenChange={setIsOpen}>
      <ModalContent>
        {() => (
          <>
            <ModalBody>
              <div className="pt-10 pb-4">
                <Input
                  placeholder={t('modal.placeholder')}
                  size="lg"
                  startContent={<MagnifyingGlassIcon className="w-4 h-4" />}
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Produkty</h3>
                <ScrollShadow className="w-full h-[400px] mt-3 mb-3">
                  <div className="flex flex-col gap-2">
                    {data?.items?.length
                      ? data.items.map((item) => (
                          <SearchProductCard key={item.sku} product={item} />
                        ))
                      : !isFetching && <NoProductsFound className="mt-5" />}
                  </div>
                </ScrollShadow>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

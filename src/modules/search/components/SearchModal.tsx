'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '@heroui/input';
import { Modal, ModalBody, ModalContent } from '@heroui/modal';
import { useTranslations } from 'next-intl';

import { useSearchModalControl } from '../hooks/useSearchModalControl';

export const SearchModal = () => {
  const t = useTranslations('search');
  const [isOpen, setIsOpen] = useSearchModalControl();

  return (
    <Modal isOpen={isOpen} size="4xl" onOpenChange={setIsOpen}>
      <ModalContent>
        {() => (
          <>
            <ModalBody>
              <div className="p-10">
                <Input
                  placeholder={t('modal.placeholder')}
                  size="md"
                  startContent={<MagnifyingGlassIcon className="w-4 h-4" />}
                />
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

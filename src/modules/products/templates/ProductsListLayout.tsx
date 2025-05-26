import { ReactNode } from 'react';
import { ListTypeToggler } from '../components/ListTypeToggler';
import { getProductsListType } from '../utils/getPorductsListType';

type ProductListLayoutProps = {
  title: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
  pagination: ReactNode;
};

export const ProductListLayout = async ({
  title,
  sidebar,
  children,
  pagination,
}: ProductListLayoutProps) => {
  const listType = await getProductsListType();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">{sidebar}</div>

        <div className="w-full md:w-3/4">
          <div className="flex mb-6 items-center justify-between">
            <h1 className="text-2xl font-bold">{title}</h1>
            <ListTypeToggler listType={listType} />
          </div>
          {children}
          <div className="mt-10 w-max mx-auto">{pagination}</div>
        </div>
      </div>
    </div>
  );
};

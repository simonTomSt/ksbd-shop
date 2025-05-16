import { cookies } from 'next/headers';

export const getProductsListType = async (): Promise<'grid' | 'list'> => {
  const cookieStore = await cookies();
  return (cookieStore.get('_ksbd_products_list_type')?.value ?? 'grid') as 'grid' | 'list';
};

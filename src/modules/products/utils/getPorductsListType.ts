import { cookies } from 'next/headers';

export const getProductsListType = async (): Promise<'grid' | 'list'> => {
  const cookieStore = await cookies();
  return (cookieStore.get('productListType')?.value ?? 'grid') as 'grid' | 'list';
};

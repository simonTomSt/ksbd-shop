'use server';

import { cookies } from 'next/headers';

export const toggleProductsListType = async () => {
  const cookieStore = await cookies();
  const currentListType = cookieStore.get('productListType')?.value ?? 'grid';

  cookieStore.set('productListType', currentListType === 'grid' ? 'list' : 'grid');
};

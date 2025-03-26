import { parseAsBoolean, useQueryState } from 'nuqs';

export const useSearchModalControl = () => {
  return useQueryState('searchModal', parseAsBoolean.withDefault(false));
};

'use client';

import { VerifyAccountError } from '@/modules/auth/components/VerifyAccountError';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return <VerifyAccountError />;
}

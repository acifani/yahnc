'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  });

  return (
    <>
      <h1>Something went wrong!</h1>
      <button onClick={() => location.reload()}>Refresh page</button> or{' '}
      <Link href="/">go back to the homepage</Link>
    </>
  );
}

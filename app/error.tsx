'use client';

import Link from 'next/link';

export default function Error({ error }: { error: Error; reset: () => void }) {
  return (
    <>
      <h1>Something went wrong!</h1>
      <button onClick={() => location.reload()}>Refresh page</button> or{' '}
      <Link href="/">go back to the homepage</Link>
    </>
  );
}

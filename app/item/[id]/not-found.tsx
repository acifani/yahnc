import Link from 'next/link';

export default function ItemNotFound() {
  return (
    <>
      <h1>Item not found</h1>
      <p>
        <Link href="/">Go back to the homepage</Link>
      </p>
    </>
  );
}

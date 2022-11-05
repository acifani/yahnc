import Link from 'next/link';

export default function UserNotFound() {
  return (
    <>
      <h1>User not found</h1>
      <p>
        <Link href="/">Go back to the homepage</Link>
      </p>
    </>
  );
}

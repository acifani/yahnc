import { notFound } from 'next/navigation';
import { SafeHTML } from '../../../components/SafeHTML';

interface User {
  about?: string;
  created_time: number;
  created: string;
  id: string;
  karma: number;
}

async function getUser(id: string): Promise<User> {
  const res = await fetch(`https://api.hnpwa.com/v0/user/${id}.json`, {
    next: { revalidate: 3600 },
  });

  const json = await res.json();
  return json;
}

export default async function User({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  if (user == null) {
    notFound();
  }

  return (
    <>
      <h1>{user.id}</h1>
      <p>
        <strong>Karma:</strong> {user.karma}
      </p>
      <p>
        <strong>Created:</strong> {user.created}
      </p>
      <p>
        <strong>About:</strong> <SafeHTML html={user.about} />
      </p>
    </>
  );
}

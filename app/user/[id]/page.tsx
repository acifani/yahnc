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
    next: { revalidate: 600 },
  });

  const json = await res.json();
  return json;
}

export default async function User(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const user = await getUser(id);

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
      {user.about && (
        <div style={{ display: 'inline' }}>
          <strong>About</strong>
          <SafeHTML html={user.about} />
        </div>
      )}
    </>
  );
}

import Link from 'next/link';
import { SafeHTML } from '../../../components/SafeHTML';

interface Item {
  comments_count: number;
  comments: Item[];
  content: string;
  dead?: boolean;
  deleted?: boolean;
  domain?: string;
  id: number;
  level: number;
  points: number | null;
  time_ago: string;
  time: number;
  title: string;
  type: string;
  url?: string;
  user: string | null;
}

async function fetchItem(id: string): Promise<Item> {
  const res = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`, {
    next: { revalidate: 3600 },
  });

  const json = await res.json();
  return json;
}

export default async function ItemPage({ params }: { params: { id: string } }) {
  const item = await fetchItem(params.id);

  return (
    <>
      <h1>{item.title}</h1>
      <p>
        <a href={item.url}>{item.url}</a>
      </p>
      {item.content && <SafeHTML html={item.content} />}
      {item.points} points by{' '}
      <Link href={`/user/${item.user}`}>{item.user}</Link> | {item.time_ago} |{' '}
      {item.comments_count} comments
      <hr />
      <ul>
        {item.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </>
  );
}

function Comment({ comment }: { comment: Item }) {
  return (
    <li key={comment.id}>
      <Link href={`/user/${comment.user}`}>{comment.user}</Link>{' '}
      {comment.time_ago}:
      <SafeHTML html={comment.content} />
      <ul>
        {comment.comments.map((c) => (
          <Comment key={c.id} comment={c} />
        ))}
      </ul>
    </li>
  );
}

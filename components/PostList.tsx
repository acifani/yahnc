import Link from 'next/link';
import { ItemLink } from './ItemLink';

export interface Post {
  comments_count: number;
  domain?: string;
  id: number;
  points?: number | null;
  time_ago: string;
  time: number;
  title: string;
  type: 'link' | 'ask' | 'job';
  url?: string;
  user?: string | null;
}

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>
            <ItemLink id={post.id} title={post.title} url={post.url} />
          </h2>
          <p>
            {post.points} points by{' '}
            <Link href={`/user/${post.user}`}>{post.user}</Link> {post.time_ago}{' '}
            {post.comments_count > 0 && (
              <Link href={`/item/${post.id}`}>
                {post.comments_count} comments
              </Link>
            )}
          </p>
        </article>
      ))}
    </>
  );
}

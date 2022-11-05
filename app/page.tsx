import Link from 'next/link';

interface Post {
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

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://api.hnpwa.com/v0/news/1.json', {
    next: { revalidate: 3600 },
  });

  const json = await res.json();
  return json;
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>
            <a href={post.url}>{post.title}</a>
          </h2>
          <p>
            {post.points} points by{' '}
            <Link href={`/user/${post.user}`}>{post.user}</Link> {post.time_ago}
          </p>
        </article>
      ))}
    </>
  );
}

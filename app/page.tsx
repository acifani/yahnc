import { PostList, type Post } from '../components/PostList';

async function fetchPosts(
  list: string,
  page: string | number
): Promise<Post[]> {
  const res = await fetch(`https://api.hnpwa.com/v0/${list}/${page}.json`, {
    next: { revalidate: 300 },
  });

  const json = await res.json();
  return json;
}

export default async function Home() {
  const posts = await fetchPosts('news', 1);
  return <PostList posts={posts} />;
}

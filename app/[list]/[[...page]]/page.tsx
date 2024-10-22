import { notFound } from 'next/navigation';
import { PostList, type Post } from '../../../components/PostList';

const lists = ['news', 'ask', 'show', 'jobs'];

async function fetchPosts(
  list: string,
  page: string | number,
): Promise<Post[]> {
  const res = await fetch(`https://api.hnpwa.com/v0/${list}/${page}.json`, {
    next: { revalidate: 300 },
  });
  const json = await res.json();
  return json;
}

export default async function List(props: {
  params: Promise<{ list: string; page?: string }>;
}) {
  const params = await props.params;
  if (
    !lists.includes(params.list) ||
    (params.page && isNaN(Number(params.page)))
  ) {
    notFound();
  }

  const posts = await fetchPosts(params.list, params.page || 1);
  return (
    <PostList
      posts={posts}
      list={params.list}
      page={Number(params.page || 1)}
    />
  );
}

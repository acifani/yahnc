import { notFound } from 'next/navigation';
import { PostList, type Post } from '../../../components/PostList';

const lists = ['news', 'ask', 'show', 'jobs'];

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

export default async function List({
  params,
}: {
  params: { list: string; page?: string };
}) {
  if (!lists.includes(params.list)) {
    notFound();
  }

  const posts = await fetchPosts(params.list, params.page || 1);
  return <PostList posts={posts} />;
}

export async function generateStaticParams() {
  const prerenderPages = ['', '1', '2'];
  const staticParams = [];

  for (const list of lists) {
    for (const page of prerenderPages) {
      staticParams.push({ list, page: [page] });
    }
  }

  return staticParams;
}

import Link from 'next/link';

interface Props {
  id: number;
  url?: string;
  title: string;
}

export function ItemLink({ title, url, id }: Props) {
  const href = url?.startsWith('http') ? url : `/item/${id}`;
  return <Link href={href}>{title}</Link>;
}

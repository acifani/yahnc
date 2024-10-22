import Link from 'next/link';
import './globals.css';
import css from './layout.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yet Another Hacker News Client',
  description: 'YAHNC - Yet Another Hacker News Client',
};

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className={css.header}>
          <div>
            <h1>
              <Link href="/">Yet Another Hacker News Client</Link>
            </h1>
            <menu>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/ask">Ask</Link>
              </li>
              <li>
                <Link href="/show">Show</Link>
              </li>
              <li>
                <Link href="/jobs">Jobs</Link>
              </li>
            </menu>
          </div>
        </header>
        <main className={css.main}>{children}</main>
        <footer className={css.footer}>
          <p>
            Made with ❤️ by{' '}
            <a href="https://alessandrocifani.com">Alessandro Cifani</a>. Source
            code available on{' '}
            <a href="https://github.com/acifani/yahnc">GitHub</a>.
          </p>
        </footer>
      </body>
    </html>
  );
}

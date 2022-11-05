import Link from 'next/link';
import './globals.css';
import css from './layout.module.css';

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
          <h1>
            <Link href="/">Yet Another Hacker News Client</Link>
          </h1>
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

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <h1>Yet Another Hacker News Client</h1>
        </header>
        <main>{children}</main>
        <footer>
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

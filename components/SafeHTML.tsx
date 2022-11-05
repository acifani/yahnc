import xss from 'xss';

export function SafeHTML({ html }: { html?: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: xss(html || ''),
      }}
    />
  );
}

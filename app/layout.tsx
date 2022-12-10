import Head from './head';
import Header from './Header';

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html>
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

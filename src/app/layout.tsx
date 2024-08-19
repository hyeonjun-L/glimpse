import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import ReactQueryProviders from '@/lib/provider/ReactQueryProviders';
import Background from './components/Background';

const consola = localFont({
  src: '../styles/font/Satoshi-Variable.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Glimpse',
  description: 'Glimpse',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${consola.className} mx-auto max-w-sm`}>
        <ReactQueryProviders>
          <Background>{children}</Background>
        </ReactQueryProviders>
      </body>
    </html>
  );
}

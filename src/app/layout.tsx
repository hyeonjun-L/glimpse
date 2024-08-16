import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';

const consola = localFont({
  src: '../styles/font/Satoshi-Variable.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={consola.className}>{children}</body>
    </html>
  );
}

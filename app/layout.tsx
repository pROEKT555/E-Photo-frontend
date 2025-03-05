import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';

const montserrat = Montserrat({
  variable: '--font-Montserrat',

  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'E-photo',
  description: 'E-photo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://places-lyart.vercel.app/'),
  title: 'Places',
  keywords: 'search, map, places, activity, fun,',
  description: 'Discover a new place for your activity',
  icons: {
    icon: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/default.jpg' }],
  },
  openGraph: {
    title: 'Places',
    description: 'Discover a new place for your activity',
    url: 'https://places-lyart.vercel.app/',
    siteName: 'Places',
    images: [
      {
        url: '/default.jpg',
        width: 400,
        height: 200,
        alt: 'Places',
      },
      {
        url: '/default.jpg',
        width: 800,
        height: 600,
      },
      {
        url: '/default.jpg',
        width: 1800,
        height: 1600,
        alt: 'Places',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

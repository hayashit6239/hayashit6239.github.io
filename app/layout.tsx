import '@mantine/core/styles.css';
import './globals.css';
import { MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { Inter, Patua_One } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const patuaOne = Patua_One({ subsets: ['latin'], weight: '400', variable: '--font-patua-one' });

export const metadata: Metadata = {
  title: 'Google Cloud Technical Summit 2026 powered by Jagu\'é\'r',
  description: '超 Google Cloud 特化のカンファレンス',
  openGraph: {
    title: 'Google Cloud Technical Summit 2026 powered by Jagu\'é\'r',
    description: '超 Google Cloud 特化のカンファレンス',
    url: 'https://hayashit6239.github.io',
    siteName: 'Google Cloud Technical Summit 2026',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Cloud Technical Summit 2026 powered by Jagu\'é\'r',
    description: '超 Google Cloud 特化のカンファレンス',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${patuaOne.variable}`}>
        <MantineProvider
          theme={{
            primaryColor: 'blue',
            fontFamily: inter.style.fontFamily,
            colors: {
              blue: [
                '#E3F2FD',
                '#BBDEFB',
                '#90CAF9',
                '#64B5F6',
                '#42A5F5',
                '#2196F3',
                '#1E88E5',
                '#1976D2',
                '#1565C0',
                '#0D47A1',
              ],
            },
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CursorGlow from './components/CursorGlow';
import Loader from './components/Loader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deepraj Srivastav | Data Analyst & Digital Marketer',
  description:
    'Portfolio of Deepraj Srivastav - Data Analyst skilled in Python, SQL, Excel, Power BI and Digital Marketing (SEO, Google Analytics, Social Media Marketing).',
  keywords: [
    'Data Analyst',
    'Python',
    'SQL',
    'Power BI',
    'Excel',
    'Digital Marketing',
    'SEO',
    'Google Analytics',
    'Social Media Marketing',
  ],
  authors: [{ name: 'Deepraj Srivastav' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9144958290677464"></meta>
      </head>
      <body className={inter.className}>
        
        <Loader />
        <CursorGlow />

        {children}

      </body>
    </html>
  );
}
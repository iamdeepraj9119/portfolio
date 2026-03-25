import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CursorGlow from './components/CursorGlow';
import Loader from './components/Loader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Deepraj',
  description: 'Data Analyst Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Loader />
        <CursorGlow />  {/* ✅ ENABLE THIS */}

        {children}

      </body>
    </html>
  );
}
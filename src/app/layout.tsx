import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/layout.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ClashGrotesk, localDepartureMono } from '@/fonts';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://resumedesk.vercel.app'),
  title: 'ResumeDesk',
  description:
    'ResumeDesk is a powerful resume builder that helps you create professional latex style resumes in minutes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={'min-h-full dark'}>
      <body className={`${ClashGrotesk.variable} ${localDepartureMono.variable} ${inter.className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

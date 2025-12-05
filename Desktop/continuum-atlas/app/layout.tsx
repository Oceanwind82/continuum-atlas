import type { Metadata } from 'next';
import '../styles/globals.css';
import Shell from '@layout/Shell';
import TopNav from '@layout/TopNav';
import Footer from '@layout/Footer';
import React from 'react';

export const metadata: Metadata = {
  title: 'continuum.atlas',
  description:
    'A public atlas of systems, stories, and structure — with Soryn Base as the Prime Chamber.'
};

export default function RootLayout({
  children
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen starfield nebula-glow text-slate-100 relative overflow-hidden">
          <Shell>
            <TopNav />
            {children}
            <Footer />
          </Shell>
        </main>
      </body>
    </html>
  );
}

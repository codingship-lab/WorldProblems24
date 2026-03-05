import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WorldProblems24',
  description: 'Tracking key global problems like government spending, debt, and war via interactive charts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <div className="flex-1">
          {children}
        </div>
        <Toaster />
        <footer className="text-center p-6 text-muted-foreground text-sm mt-auto border-t border-border/20">
          <div className="flex justify-center gap-4 md:gap-6 mb-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
          </div>
          <div className="mb-4">
            <span>Contact: </span>
            <a href="mailto:contactus@codingship.qzz.io" className="hover:text-foreground transition-colors">contactus@codingship.qzz.io</a>
            <span> or </span>
            <a href="mailto:support@codingship.qzz.io" className="hover:text-foreground transition-colors">support@codingship.qzz.io</a>
          </div>
          <p>© {new Date().getFullYear()} WorldProblems24. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

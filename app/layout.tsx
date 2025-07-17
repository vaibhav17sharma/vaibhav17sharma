import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vaibhav Sharma - Full Stack Engineer',
  description: 'Full Stack Engineer specializing in MERN Stack, Angular, and AI/ML. Currently pursuing M.Tech in AI & ML from BITS Pilani.',
  keywords: 'Full Stack Developer, MERN Stack, Angular, Next.js, AI/ML, JavaScript, TypeScript',
  authors: [{ name: 'Vaibhav Sharma' }],
  creator: 'Vaibhav Sharma',
  openGraph: {
    title: 'Vaibhav Sharma - Full Stack Engineer',
    description: 'Full Stack Engineer specializing in MERN Stack, Angular, and AI/ML',
    url: 'https://vaibhavsharma.dev',
    siteName: 'Vaibhav Sharma Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Sharma - Full Stack Engineer',
    description: 'Full Stack Engineer specializing in MERN Stack, Angular, and AI/ML',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0D0D0D] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
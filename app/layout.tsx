import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vaibdev.com'),
  title: 'Vaibhav Sharma — Engineer × AI',
  description: 'Full Stack Engineer with a deep curiosity for AI. Building scalable web systems and exploring intelligent interfaces. Pursuing M.Tech in AI & ML from BITS Pilani.',
  keywords: 'Vaibhav Sharma, Full Stack Developer, MERN Stack, Angular, Next.js, AI, ML, Machine Learning, JavaScript, TypeScript',
  authors: [{ name: 'Vaibhav Sharma' }],
  creator: 'Vaibhav Sharma',
  openGraph: {
    title: 'Vaibhav Sharma — Engineer × AI',
    description: 'Full Stack Engineer with a deep curiosity for AI. Building intelligent, scalable systems.',
    url: 'https://vaibdev.com',
    siteName: 'Vaibhav Sharma Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Sharma — Engineer × AI',
    description: 'Full Stack Engineer with a deep curiosity for AI. Building intelligent, scalable systems.',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-[#080B12] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
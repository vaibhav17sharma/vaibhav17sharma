import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://vaibdev.com/links'),
  title: 'Vaibhav Sharma - Links | Full Stack Engineer',
  description: 'Connect with Vaibhav Sharma across all platforms. Full Stack Engineer specializing in MERN Stack, Angular, and AI/ML.',
  keywords: 'Vaibhav Sharma, Full Stack Developer, MERN Stack, Angular, Next.js, AI/ML, JavaScript, TypeScript, Links, Social Media',
  authors: [{ name: 'Vaibhav Sharma' }],
  creator: 'Vaibhav Sharma',
  openGraph: {
    title: 'Vaibhav Sharma - All Links',
    description: 'Connect with me across all platforms - Portfolio, GitHub, LinkedIn, and more',
    url: 'https://vaibdev.com/links',
    siteName: 'Vaibhav Sharma Links',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Sharma - All Links',
    description: 'Connect with me across all platforms - Portfolio, GitHub, LinkedIn, and more',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
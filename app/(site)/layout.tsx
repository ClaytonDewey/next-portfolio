import Link from 'next/link';
import '../globals.css';
import { getPages } from '@/sanity/sanity-utils';

export const metadata = {
  title: 'My Awesome Site!',
  description: 'Generated by Next + Sanity',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all of our pages
  const pages = await getPages();

  return (
    <html lang='en'>
      <body className='max-w-5xl mx-auto py-10'>
        <header className='flex items-center justify-between'>
          <Link
            href='/'
            className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'>
            Clayton
          </Link>

          <div className='flex items-center gap-5 text-gray600 text-sm'>
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className='hover:underline transition'>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  );
}

'use client';

import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: { slug: string };
};

const Page = async ({ params }: Props) => {
  const page = await getPage(params.slug);

  return (
    <div>
      <header>
        <h1 className='text-5xl drop-shadow font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
          {page.title}
        </h1>
      </header>

      <div className='text-lg text-gray-700 mt-10'>
        <PortableText value={page.content} />
      </div>
    </div>
  );
};
export default Page;

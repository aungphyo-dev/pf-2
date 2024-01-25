export const dynamic = 'force-dynamic';
import { NavigateLink, StickyNavigationBar } from '@/components';
import { getBlogPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  let blog = getBlogPosts()
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .filter((post, index) => index < 2);
  return (
    <div className='pt-12 lg:pt-24' id='blogs'>
      <StickyNavigationBar name={'blogs'} />
      <ul className='group/list'>
        {blog.map((blog) => (
          <li key={blog.slug} className='mb-12'>
            <div className='group relative grid grid-cols-8 gap-4 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
              <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
              <Image
                alt='blog-image'
                width={'800'}
                height={'800'}
                className='z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2'
                src='/blog-cover-image-1.jpg'
              />
              <div className='z-10 col-span-6'>
                <p className='-mt-1 text-sm font-semibold leading-6 text-slate-400'>
                  {formatDate(blog.metadata.publishedAt)}
                </p>
                <h3 className='mt-1'>
                  <Link
                    className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                    href={`/blogs/${blog.slug}`}
                  >
                    <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                    <span>{blog.metadata.title}</span>
                  </Link>
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <NavigateLink link={'/blogs'} content={'view blogs'} />
    </div>
  );
};

export default Blog;

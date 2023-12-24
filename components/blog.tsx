export const dynamic = 'force-dynamic';

import { getBlogPosts } from '@/db/blog';
import { NavigateLink, StickyNavigationBar } from '@/components/index';
import Link from 'next/link';

const Blog = () => {
    let blog = getBlogPosts().filter((post, index) => index < 4).sort((a, b) => {
        if (
            new Date(a.metadata.publishedAt) >
            new Date(b.metadata.publishedAt)
        ) {
            return -1;
        }
        return 1;
    });
    return (
        <div aria-label='blogs' className='pt-12 lg:pt-24' id='blogs'>
            <StickyNavigationBar name={'blogs'} />
            <ul className='group/list'>
                {blog
                    .map((blog) => (
                    <li key={blog.slug} className='mb-12'>
                        <div className='group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                            <div className='z-10 col-span-8'>
                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className='group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300'
                                >
                                    <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded uppercase md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                                    {blog.metadata.title}
                                </Link>
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

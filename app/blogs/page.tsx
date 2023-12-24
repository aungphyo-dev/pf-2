export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { getBlogPosts } from '@/db/blog';

const Blogs = () => {
    let allBlogs = getBlogPosts();
    return (
        <div className='mx-auto w-full max-w-screen-md'>
            {allBlogs
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) >
                        new Date(b.metadata.publishedAt)
                    ) {
                        return -1;
                    }
                    return 1;
                })
                .map((post) => (
                    <Link
                        key={post.slug}
                        className='group mb-5 flex w-full flex-col space-y-1'
                        href={`/blogs/${post.slug}`}
                    >
                        <div className='flex w-full flex-col lg:flex-row lg:items-center lg:justify-between'>
                            <p className='tracking-tight text-neutral-900 group-hover:text-blue-500 dark:text-neutral-100 dark:group-hover:text-blue-500'>
                                {post.slug.toUpperCase()}
                            </p>
                            <p className='text-neutral-600 dark:text-neutral-400'>
                                {`0 views`}
                            </p>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default Blogs;

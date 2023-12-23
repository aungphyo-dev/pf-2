import Link from 'next/link';
import { getBlogPosts } from '@/db/blog';

const Blogs = () => {
    let allBlogs = getBlogPosts();
    return (
        <div className='mx-auto h-full w-full max-w-screen-md space-y-2'>
            {allBlogs.map((post) => (
                <Link
                    key={post.slug}
                    className='mb-4 flex flex-col space-y-1'
                    href={`/blogs/${post.slug}`}
                >
                    <div className='flex w-full flex-col'>
                        <p className='tracking-tight text-neutral-900 dark:text-neutral-100'>
                            {post.slug.toUpperCase()}
                        </p>
                        <p className='text-neutral-600 dark:text-neutral-400'>
                            {`1111 views`}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Blogs;

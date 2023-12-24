import { MdxViewer } from '@/components/mdx-viewer';
import { getBlogPosts } from '@/db/blog';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/utils';
const BlogById = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    let post = getBlogPosts().find((post) => post.slug === slug);
    if (!post) {
        notFound();
    }
    return (
        <div className='mx-auto max-w-screen-md'>
            <div className='mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm'>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                    {formatDate(post.metadata.publishedAt as string)}
                </p>
            </div>
            <article className='prose-quoteless prose prose-neutral dark:prose-invert '>
                <MdxViewer source={post.content} />
            </article>
        </div>
    );
};

export default BlogById;

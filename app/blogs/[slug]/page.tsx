import { increaseViewsCount } from '@/actions';
import { MdxViewer } from '@/components/mdx-viewer';
import ViewsCounter from '@/components/views-counter';
import { getBlogPosts } from '@/db/blog';
import { formatDate } from '@/lib/utils';
import supabase from '@/services/supabase';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const revalidate = 0;
const BlogById = async ({ params }: { params: { slug: string } }) => {
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
                <Suspense fallback={<p className='h-5' />}>
                    <Views slug={post.slug} />
                </Suspense>
            </div>
            <article className='prose-quoteless prose prose-neutral dark:prose-invert '>
                <MdxViewer source={post.content} />
            </article>
        </div>
    );
};

export default BlogById;
async function Views({ slug }: { slug: string }) {
    await increaseViewsCount(slug);
    const { data } = await supabase
        .from('view_blogs')
        .select('*')
        .eq('slug', slug);
    return <ViewsCounter views={data?.at(0)?.views} />;
}

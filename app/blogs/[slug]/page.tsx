import { increaseViewsCount } from '@/actions';
import { MdxViewer } from '@/components/blog/mdx-viewer';
import ViewsCounter from '@/components/blog/views-counter';
import { getBlogPosts } from '@/lib/blog';
import supabase from '@/lib/supabase';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
const BlogById = async ({ params: { slug } }: { params: { slug: string } }) => {
  await increaseViewsCount(slug);
  const post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }
  return (
    <div className='mx-auto max-w-screen-md'>
      <div className='mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm'>
        <p className='text-sm text-neutral-400'>
          {formatDate(post.metadata.publishedAt as string)}
        </p>
        <Suspense fallback={<p className='h-5' />}>
          <Views slug={post.slug} />
        </Suspense>
      </div>
      <article className='prose-quoteless prose prose-invert'>
        <MdxViewer source={post.content} />
      </article>
    </div>
  );
};

export default BlogById;
async function Views({ slug }: { slug: string }) {
  const { data } = await supabase
    .from('view_blogs')
    .select('*')
    .eq('slug', slug);
  return <ViewsCounter views={data?.at(0)?.views} />;
}

import { MdxViewer } from '@/components/blog/mdx-viewer';
import { getBlogPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
const BlogById = async ({ params: { slug } }: { params: { slug: string } }) => {
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
      </div>
      <article className='prose-quoteless prose prose-invert'>
        <MdxViewer source={post.content} />
      </article>
    </div>
  );
};

export default BlogById;

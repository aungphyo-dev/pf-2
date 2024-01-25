import ViewsCounter from '@/components/blog/views-counter';
import { getBlogPosts } from '@/lib/blog';
import supabase from '@/lib/supabase';
import Link from 'next/link';
import { Suspense } from 'react';
const Blogs = async () => {
  const allBlogs = getBlogPosts();
  return (
    <div className='mx-auto w-full max-w-screen-md'>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
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
            <div className='w-full'>
              <p className='tracking-tight lg:group-hover:text-blue-500 text-neutral-100 group-hover:text-blue-500'>
                {post.metadata.title}
              </p>
              <p className='text-neutral-600 dark:text-neutral-400'>
                <Suspense
                  fallback={
                    <span className='text-neutral-600 dark:text-neutral-400'>
                      0 view
                    </span>
                  }
                >
                  <Views slug={post.slug} />
                </Suspense>
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Blogs;
async function Views({ slug }: { slug: string }) {
  const { data } = await supabase
    .from('view_blogs')
    .select('*')
    .eq('slug', slug);
  return <ViewsCounter views={data?.at(0)?.views} />;
}

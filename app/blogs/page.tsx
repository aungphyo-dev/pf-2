import { getBlogPosts } from '@/lib/blog';
import Link from 'next/link';

export async function generateStaticParams() {
  const blogs = getBlogPosts();
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

const Blogs = async () => {
  const allBlogs = getBlogPosts();
  return (
    <div className='mx-auto w-full max-w-screen-md flex flex-col space-y-5'>
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
            className='w-full tracking-tight text-neutral-100'
            href={`/blogs/${post.slug}`}
          >
            {' '}
            {post.metadata.title}
          </Link>
        ))}
    </div>
  );
};

export default Blogs;

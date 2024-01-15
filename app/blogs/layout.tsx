import BlogNavigation from '@/components/blog/blog-navigation';
import { ReactNode } from 'react';

export const metadata = {
    title: 'Blog',
    description: 'Read my thoughts on software development, design, and more.',
};
const BlogLayout = async ({ children }: { children: ReactNode }) => {
    return (
        <section className='px-5 lg:px-12 bg-slate-900'>
            <BlogNavigation />
            <div className='min-h-[calc(100dvh-60px)] pt-[20px] pb-52'>
                {children}
            </div>
        </section>
    );
};

export default BlogLayout;

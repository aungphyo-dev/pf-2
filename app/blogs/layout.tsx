import { ReactNode } from 'react';

import BlogNavigation from '@/components/blog/blog-navigation';

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

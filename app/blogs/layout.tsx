import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

import BlogNavigation from '@/components/blog-navigation';

const ThemeProvider = dynamic(() => import('@/components/theme-provider'), {
    ssr: false,
});

const BlogLayout = async ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider>
            <section className='bg-gray-100 px-5 lg:px-12 dark:bg-gray-800'>
                <BlogNavigation />
                <div className='min-h-[calc(100dvh-60px)] pt-[20px] pb-52'>
                    {children}
                </div>
            </section>
        </ThemeProvider>
    );
};

export default BlogLayout;

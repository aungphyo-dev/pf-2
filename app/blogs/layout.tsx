import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import BlogNavigation from '@/components/blog-navigation';

const ThemeProvider = dynamic(() => import('@/components/theme-provider'), {
    ssr: false,
});

const BlogLayout = async ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider>
            <section className='bg-gray-100 px-5 lg:px-12 dark:bg-gray-800'>
                <BlogNavigation />
                <div className='min-h-[calc(100dvh-60px)] py-[20px]'>
                    {children}
                </div>
            </section>
        </ThemeProvider>
    );
};

export default BlogLayout;

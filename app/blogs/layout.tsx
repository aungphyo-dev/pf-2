import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';
const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
    ssr: false,
});
const ThemeProvider = dynamic(() => import('@/components/theme-provider'), {
    ssr: false,
});

const BlogLayout = async ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider>
            <section className='min-h-dvh bg-gray-100 px-5 lg:px-12 dark:bg-gray-800'>
                <nav className='flex items-center justify-between pb-2 pt-5'>
                    <Link
                        href={'/blogs'}
                        className='group flex items-center justify-center gap-x-1'
                    >
                        <ArrowLeftIcon className='h-6 w-6 transition-transform duration-500 group-hover:-translate-x-2' />
                        Back
                    </Link>
                    <ThemeToggle />
                </nav>
                <div>{children}</div>
            </section>
        </ThemeProvider>
    );
};

export default BlogLayout;

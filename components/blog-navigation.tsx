'use client';
import { ArrowLeftIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
    ssr: false,
});
const BlogNavigation = () => {
    const pathname = usePathname();
    return (
        <nav className='sticky top-0 flex items-center justify-between bg-gray-100 pb-2 pt-5 lg:px-8 dark:bg-gray-800'>
            <Link
                scroll={false}
                href={pathname === '/blogs' ? '/' : '/blogs'}
                className='group flex items-center justify-center gap-x-1'
            >
                <ArrowLeftIcon className='h-6 w-6 transition-transform duration-500 group-hover:-translate-x-2' />
                Back
            </Link>
            <ThemeToggle />
        </nav>
    );
};

export default BlogNavigation;

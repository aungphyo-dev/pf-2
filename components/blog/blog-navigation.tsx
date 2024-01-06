'use client';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BlogNavigation = () => {
    const pathname = usePathname();
    return (
        <nav className='sticky top-0 flex items-center justify-between pb-2 pt-5 lg:px-8 bg-slate-900 text-slate-200'>
            <Link
                scroll={false}
                href={pathname === '/blogs' ? '/' : '/blogs'}
                className='group flex items-center justify-center gap-x-1'
            >
                <ArrowLeftIcon className='h-6 w-6 transition-transform duration-500 group-hover:-translate-x-2' />
                Back
            </Link>
        </nav>
    );
};

export default BlogNavigation;

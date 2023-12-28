'use client';
import { SignOutButton } from '@/components';
import { dashboard_navigation_items } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminDashboardSideBar = () => {
    const pathname = usePathname();
    return (
        <div className='group/list2 sticky top-0 flex h-screen w-[170px] flex-col overflow-y-auto border-r border-r-gray-600 bg-zinc-800 pb-5 pt-[60px]'>
            {dashboard_navigation_items.map((item) => (
                <Link
                    className={`flex w-full items-center justify-start gap-x-3 px-4 py-2 capitalize text-slate-300 hover:bg-zinc-700 hover:!opacity-100 group-hover/list:opacity-50 ${
                        pathname === item.href.toLowerCase()
                            ? 'bg-zinc-700 group-hover/list:opacity-100'
                            : ''
                    }`}
                    href={item.href.toLowerCase()}
                    key={item.name}
                >
                    <item.icon size={18} />
                    {item.name}
                </Link>
            ))}
            <div className='mt-auto w-full px-3'>
                <SignOutButton />
            </div>
        </div>
    );
};

export default AdminDashboardSideBar;

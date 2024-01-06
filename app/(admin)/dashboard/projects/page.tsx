export const dynamic = 'force-dynamic';
import { getAllProjects } from '@/actions';
import AdminDashboardTable from '@/components/admin/admin-dashboard-table';
import { Plus } from 'lucide-react';
import Link from 'next/link';
const DashboardProjects = async () => {
    const projects = await getAllProjects();
    return (
        <div>
            <div className='flex justify-end items-center'>
                <Link
                    href={'/dashboard/projects/create'}
                    className='text-slate-200 flex justify-center items-center gap-x-1'
                >
                    Create <Plus />
                </Link>
            </div>
            <AdminDashboardTable projects={projects} />
        </div>
    );
};

export default DashboardProjects;

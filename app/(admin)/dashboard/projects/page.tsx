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
          className='text-sm text-slate-200 bg-slate-400 flex justify-center items-center gap-x-1 p-2 rounded'
        >
          Create <Plus size={18} />
        </Link>
      </div>
      <AdminDashboardTable projects={projects} />
    </div>
  );
};

export default DashboardProjects;

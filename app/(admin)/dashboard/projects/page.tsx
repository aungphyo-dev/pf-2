export const dynamic = 'force-dynamic';
import { getAllProjects } from '@/actions';
import AdminDashboardTable from '@/components/admin-dashboard-table';

const DashboardProjects = async () => {
    const projects = await getAllProjects();
    return (
        <div>
            <AdminDashboardTable projects={projects} />
        </div>
    );
};

export default DashboardProjects;

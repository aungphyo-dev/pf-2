export const revalidate = 0;
import AdminDashboardTable from '@/components/admin-dashboard-table';
import { getAllProjects } from '@/actions';

const DashboardProjects = async () => {
    const projects = await getAllProjects();
    return (
        <div>
            <AdminDashboardTable projects={projects} />
        </div>
    );
};

export default DashboardProjects;

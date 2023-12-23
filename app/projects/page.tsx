export const dynamic = 'force-dynamic';
import { ProjectsTable } from '@/components';
import { getAllProjects } from '@/actions';
const Projects = async () => {
    const projects = await getAllProjects();
    return <ProjectsTable projects={projects} />;
};
export default Projects;

export const dynamic = 'force-dynamic';
import { getAllProjects } from '@/actions';
import { ProjectsTable } from '@/components';
const Projects = async () => {
    const projects = await getAllProjects();
    return <ProjectsTable projects={projects} />;
};
export default Projects;

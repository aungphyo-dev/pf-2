import { getAllProjects } from '@/actions';
import { ProjectsTable } from '@/components';
export const metadata = {
  title: 'Projects',
  description: 'Showcase of my projects',
};
const Projects = async () => {
  const projects = await getAllProjects();
  return <ProjectsTable projects={projects} />;
};
export default Projects;

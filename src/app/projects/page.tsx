import { ProjectsComponent } from '@/components';
import { getAllProjects } from '@/actions';

const Projects = async () => {
  const projects = await getAllProjects();
  return <ProjectsComponent projects={projects} />;
};
export default Projects;

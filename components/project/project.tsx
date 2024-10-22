import { getProjectByLimit } from '@/actions';
import { NavigateLink, ProjectCard, StickyNavigationBar } from '@/components';
const Project = async () => {
  const projects = await getProjectByLimit();
  return (
    <div data-section='projects' className='pt-12 lg:pt-24' id='projects'>
      <StickyNavigationBar name={'projects'} />
      <ul className='group/list'>
        {projects
          ?.sort((a, b) => +b.year - +a.year)
          .map((project) => <ProjectCard key={project.id} project={project} />)}
      </ul>
      <div>
        <NavigateLink
          download={false}
          link={'/projects'}
          content={'view all my projects'}
        />
      </div>
    </div>
  );
};
export default Project;

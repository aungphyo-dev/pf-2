import { getProjectByLimit } from '@/actions';
import { NavigateLink, ProjectCard, StickyNavigationBar } from '@/components';
const Project = async () => {
    const projects = await getProjectByLimit();
    return (
        <div aria-label='projects' className='pt-12 lg:pt-24' id='projects'>
            <StickyNavigationBar name={'projects'} />
            <ul className='group/list1'>
                {projects?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
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

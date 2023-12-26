import { getProjectById } from '@/actions';
import ProjectEditForm from '@/components/project-edit-form';
const ProjectByID = async ({ params }: { params: { id: number } }) => {
    const { id } = params;
    const project = await getProjectById(id);
    return (
        <div>
            <ProjectEditForm project={project} />
        </div>
    );
};

export default ProjectByID;

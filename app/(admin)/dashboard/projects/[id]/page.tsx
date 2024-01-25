import { getProjectById } from '@/actions';
import AdminProjectEditForm from '@/components/admin/admin-project-edit-form';
const ProjectByID = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const project = await getProjectById(id);
  return (
    <div>
      <AdminProjectEditForm project={project} />
    </div>
  );
};

export default ProjectByID;

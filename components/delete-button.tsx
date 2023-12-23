import { deleteProject } from '@/actions';
import { SubmitButton } from '@/components/index';

const DeleteButton = ({ id, image }: { id: number; image: string }) => {
    const deleteProjectWithId = deleteProject.bind(null, id, image);
    return (
        <form action={deleteProjectWithId}>
            <SubmitButton
                name={'Delete'}
                className='w-full rounded-none bg-transparent px-3 py-1 text-start  text-xs text-slate-300 hover:bg-zinc-400 hover:text-slate-900'
            />
        </form>
    );
};

export default DeleteButton;

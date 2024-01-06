import { authSignOut } from '@/actions';
import { LogOut } from 'lucide-react';

const AdminSignOutButton = () => {
    return (
        <form action={authSignOut}>
            <button className='hover:bg-slate-5 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-4 py-1 font-medium text-slate-700'>
                SignOut
                <LogOut size={18} className='ml-2' />
            </button>
        </form>
    );
};

export default AdminSignOutButton;

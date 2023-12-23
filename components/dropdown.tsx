import { MoreVertical } from 'lucide-react';
import { ReactNode } from 'react';

const Dropdown = ({ children }: { children: ReactNode }) => {
    return (
        <div className='group relative flex items-center justify-end'>
            <button className='border-none text-slate-300 outline-none'>
                <MoreVertical />
            </button>
            <div
                className={`absolute right-0 top-[22px] z-10 hidden min-h-20 w-40 overflow-hidden rounded bg-slate-700 group-hover:block`}
            >
                {children}
            </div>
        </div>
    );
};

export default Dropdown;

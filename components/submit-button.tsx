'use client';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';
const SubmitButton = ({ name }: { name: string }) => {
    const { pending } = useFormStatus();
    return (
        <button
            disabled={pending}
            className='flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'
        >
            {pending ? <Loader2 className='animate-spin' /> : name}
        </button>
    );
};

export default SubmitButton;

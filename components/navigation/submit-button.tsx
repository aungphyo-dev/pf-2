'use client';
import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';
const SubmitButton = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className={`flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-white hover:bg-blue-800  ${className}`}
    >
      {pending ? <Loader2 className='animate-spin' size={18} /> : name}
    </button>
  );
};

export default SubmitButton;

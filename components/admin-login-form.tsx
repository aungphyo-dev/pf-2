'use client';
import { authenticate } from '@/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '@/components/index';
const initialFormState = {
    errors: {},
    message: null,
};
const AdminLoginForm = () => {
    const [errorMessage, dispatch] = useFormState(
        authenticate,
        initialFormState
    );
    return (
        <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-200'>
                    Sign in to your account
                </h2>
            </div>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form className='space-y-6' action={dispatch}>
                    {errorMessage.message && (
                        <div
                            className='mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400'
                            role='alert'
                        >
                            <span className='font-medium'>Danger alert!</span>{' '}
                            {errorMessage.message}
                        </div>
                    )}
                    <div>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium leading-6 text-slate-400'
                        >
                            Email address
                        </label>
                        <div className='mt-2'>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                required
                                className='block w-full rounded-md border-0 bg-gray-300 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor='password'
                            className='block text-sm font-medium leading-6 text-slate-400'
                        >
                            Password
                        </label>
                        <div className='mt-2'>
                            <input
                                id='password'
                                autoComplete={'current_password'}
                                name='password'
                                type='password'
                                required
                                className='block w-full rounded-md border-0 bg-gray-300 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>
                    <div>
                        <SubmitButton name={'Sign In'} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginForm;

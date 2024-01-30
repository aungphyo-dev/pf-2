'use client';
import { updateProject } from '@/actions';
import { SubmitButton } from '@/components';
import { ProjectType } from '@/lib/type';
import { UploadCloud } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useFormState } from 'react-dom';
const initialFormState = {
  errors: {},
  message: null,
};
const AdminProjectEditForm = ({ project }: { project: ProjectType }) => {
  const [imageUrl, setImageUrl] = useState('');
  const updateProjectWithId = updateProject.bind(null, project.id as number);
  const [errorMessage, dispatch] = useFormState(
    updateProjectWithId,
    initialFormState
  );
  return (
    <form action={dispatch} className='pb-20 space-y-5'>
      {errorMessage.message && (
        <div
          className='mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400'
          role='alert'
        >
          <span className='font-medium'>Error alert!</span>{' '}
          {errorMessage.message}
        </div>
      )}
      <div className='w-full h-[300px] rounded overflow-hidden'>
        <label
          htmlFor='dropzone-file'
          className='relative flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50'
        >
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <UploadCloud className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400' />
            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
              Click to upload
            </p>
          </div>
          {
            <Image
              fill
              priority
              sizes={'500'}
              src={
                imageUrl
                  ? imageUrl
                  : `${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL}${project.image}`
              }
              className='w-full object-cover'
              alt='dd'
            />
          }
          <input
            name='image'
            id='dropzone-file'
            type='file'
            className='hidden'
            multiple={false}
            onChange={(e) =>
              setImageUrl(
                e.target.files?.['0']
                  ? URL.createObjectURL(e.target.files['0'])
                  : ''
              )
            }
          />
        </label>
      </div>
      <div>
        <label
          htmlFor='title'
          className='block text-sm font-medium leading-6 text-slate-400'
        >
          Title
        </label>
        <div className='mt-2'>
          <input
            id='title'
            type='text'
            required
            name='title'
            className='block w-full rounded-md border-0 bg-gray-300 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      <div>
        <label
          htmlFor='description'
          className='block text-sm font-medium leading-6 text-slate-400'
        >
          Description
        </label>
        <div className='mt-2'>
          <input
            id='description'
            type='text'
            required
            name='description'
            className='block w-full rounded-md border-0 bg-gray-300 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      <div>
        <label
          htmlFor='demo'
          className='block text-sm font-medium leading-6 text-slate-400'
        >
          Demo
        </label>
        <div className='mt-2'>
          <input
            id='demo'
            type='text'
            name='demo'
            className='block w-full rounded-md border-0 bg-gray-300 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-5'>
        <div>
          <label
            htmlFor='year'
            className='block text-sm font-medium leading-6 text-slate-400'
          >
            Year
          </label>
          <div className='mt-2'>
            <input
              id='year'
              type='text'
              name='year'
              className='block w-full rounded-md border-0 bg-gray-300 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='made_at'
            className='block text-sm font-medium leading-6 text-slate-400'
          >
            Made At
          </label>
          <div className='mt-2'>
            <input
              id='made_at'
              type='text'
              name='made_at'
              className='block w-full rounded-md border-0 bg-gray-300 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor='skills'
          className='block text-sm font-medium leading-6 text-slate-400'
        >
          Skills
        </label>
        <div className='mt-2 relative'>
          <input
            id='skills'
            name='skills'
            type='text'
            className='block w-full rounded-md border-0 bg-gray-300 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      <SubmitButton name={'Update'} />
    </form>
  );
};

export default AdminProjectEditForm;

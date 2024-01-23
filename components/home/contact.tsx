'use client';
import { sendMail } from '@/actions';
import { StickyNavigationBar, SubmitButton } from '@/components';
import { ChangeEvent, useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
const Contact = () => {
  const [state, action] = useFormState(sendMail, '');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    question: '',
    message: '',
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (state === 'Successfully') {
      setContactForm({ name: '', email: '', question: '', message: '' });
    }
  }, [state]);
  return (
    <div className='pt-12 lg:pt-24'>
      <StickyNavigationBar name={'contact'} />
      <form action={action} className='p-lg:p-5 w-full'>
        <div className='group relative z-0 mb-6 w-full'>
          <input
            value={contactForm.name}
            onChange={handleChange}
            type='text'
            name='name'
            id='floating_name'
            className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm  text-gray-100 focus:border-blue-600 focus:outline-none focus:ring-0'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_name'
            className='absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0  peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600'
          >
            {' '}
            Name
          </label>
        </div>
        <div className='group relative z-0 mb-6 w-full'>
          <input
            value={contactForm.email}
            onChange={handleChange}
            type='eamil'
            name='email'
            id='floating_eamil'
            className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm  text-gray-100 focus:border-blue-600 focus:outline-none focus:ring-0'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_eamil'
            className='absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0  peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600'
          >
            {' '}
            Email
          </label>
        </div>
        <div className='group relative z-0 mb-6 w-full'>
          <input
            value={contactForm.question}
            onChange={handleChange}
            type='text'
            name='question'
            id='floating_question'
            className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm  text-gray-100 focus:border-blue-600 focus:outline-none focus:ring-0'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_question'
            className='absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0  peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600'
          >
            Question
          </label>
        </div>
        <div className='group relative z-0 mb-6 w-full'>
          <textarea
            value={contactForm.message}
            onChange={handleChange}
            rows={5}
            name='message'
            className='peer block w-full resize-none appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm  text-gray-100 focus:border-blue-600 focus:outline-none focus:ring-0'
            placeholder=' '
            required
          ></textarea>
          <label className='absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0  peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600'>
            Message
          </label>
        </div>
        <SubmitButton name={'Send Mail'} />
      </form>
    </div>
  );
};
export default Contact;

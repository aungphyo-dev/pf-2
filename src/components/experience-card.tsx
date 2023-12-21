import { ExperienceType } from '@/types';
import { ArrowUpRight } from 'lucide-react';

const ExperienceCard = ({
  experience: {
    description,
    durationStart,
    durationEnd,
    title,
    company,
    companyLink,
    skills,
  },
}: {
  experience: ExperienceType;
}) => {
  return (
    <li className='mb-12'>
      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
        <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>
          {durationStart} — {durationEnd}
        </header>
        <div className='z-10 sm:col-span-6'>
          <h3 className='font-medium leading-snug text-slate-200'>
            <div>
              <a
                className='group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300'
                href={companyLink}
                target='_blank'
                rel='noreferrer noopener'
              >
                <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                {company}
                <ArrowUpRight className='ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none' />
              </a>
            </div>
            <div className='text-slate-500'>{title}</div>
          </h3>
          <p className='mt-2 text-sm leading-normal text-[#5eead4]'>
            {description}
          </p>
          <ul className='mt-2 flex flex-wrap'>
            {skills.map((skill) => (
              <li key={skill} className='mr-1.5 mt-2'>
                <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                  {skill}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
export default ExperienceCard;

// <li className='group relative mb-12 cursor-pointer transition-all lg:hover:!opacity-100 lg:group-hover/card:opacity-50'>
//   <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100'>
//     <div
//         className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
//     <header
//         className='z-10 mb-2 mt-1 flex gap-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 sm:flex-col'>
//       <span>{experience.durationStart}</span>
//       <span className='rotate-90 px-5 sm:rotate-0 sm:px-0 sm:ps-7'>
//             &#8693;
//           </span>
//       <span>{experience.durationEnd}</span>
//     </header>
//     <div className='z-10 sm:col-span-6'>
//       <h3 className='font-medium leading-snug text-slate-200'>
//         <div>
//           <div
//               className='group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300'>
//             <span>{experience.title}</span>
//           </div>
//         </div>
//       </h3>
//       <p className='mt-2 text-sm leading-normal text-[#94a3b8]'>
//         {experience.description}
//       </p>
//       <ul className='mt-2 flex flex-wrap'>
//         {experience.skills.map((skill) => (
//             <li key={skill} className='mr-1.5 mt-2'>
//               <div
//                   className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
//                 {skill}
//               </div>
//             </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </li>

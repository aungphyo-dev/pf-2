'use client';
import Link from 'next/link';
import { ProjectsType } from '@/types';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectsComponent = ({ projects }: { projects: ProjectsType }) => {
  return (
    <div className='relative mx-auto min-h-screen w-full max-w-screen-xl pt-[20px]'>
      <div className='px-3 py-9 md:px-5'>
        <Link
          href={'/'}
          className='group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300'
        >
          <ArrowLeft className='mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2' />
          Typle
        </Link>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
          All Projects
        </h1>
      </div>
      <div className='px-3 md:px-5'>
        <table id='content' className='w-full border-collapse text-left'>
          <thead className='sticky top-0 z-10 border-b border-slate-300/10 bg-slate-950/75 px-6 py-5 backdrop-blur'>
            <tr>
              <th className='py-4 pr-8 text-sm font-semibold text-slate-200'>
                Project
              </th>
              <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>
                Built with
              </th>
              <th className='py-4 pr-8 text-right text-sm font-semibold text-slate-200 md:text-start'>
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.title}
                className='border-b border-slate-300/10 last:border-none'
              >
                <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-200'>
                  <div>
                    <div className='block sm:hidden'>
                      <span>{project.title}</span>
                    </div>
                    <div className='hidden sm:block'>{project.title}</div>
                  </div>
                </td>
                <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                  <ul className='flex -translate-y-1.5 flex-wrap'>
                    {project.skills.map((skill) => (
                      <li key={skill.toString()} className='mr-1.5 mt-2'>
                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className='py-4'>
                  <a
                    href={project.demo}
                    target={'_blank'}
                    rel='noreferrer'
                    className='group text-white'
                  >
                    <ExternalLink className='mx-auto  transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-2 md:mx-0' />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsComponent;

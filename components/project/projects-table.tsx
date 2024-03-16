'use client';
import { ProjectsType } from '@/lib/type';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const ProjectsTable = ({ projects }: { projects: ProjectsType }) => {
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
      <div className='w-full px-3 md:px-5'>
        <table id='content' className='mt-12 w-full border-collapse text-left'>
          <thead className='sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 md:px-0 py-5 backdrop-blur'>
            <tr>
              <th className='py-4 pr-8 text-sm font-semibold text-slate-200  max-w-fit lg:w-auto'>
                Year
              </th>
              <th className='py-4 pr-8 text-sm font-semibold text-slate-200'>
                Project
              </th>
              <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>
                Made at
              </th>
              <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>
                Built with
              </th>
              <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell'>
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projects
              .sort((a, b) => +b.year - +a.year)
              .map((p) => (
                <tr
                  key={p.id}
                  className='border-b border-slate-300/10 last:border-none'
                >
                  <td className='py-4 pr-4 align-top text-sm'>
                    <div className='translate-y-px text-slate-200'>
                      {p.year}
                    </div>
                  </td>
                  <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-200'>
                    <div>
                      <div className='block sm:hidden'>
                        <a
                          className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-slate-200 focus-visible:text-teal-300 sm:hidden group/link text-base'
                          href={p?.demo ?? '#'}
                          target='_blank'
                          rel='noreferrer noopener'
                        >
                          <span className='inline-block'>
                            {p.title}
                            <ArrowUpRight className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
                          </span>
                        </a>
                      </div>
                      <div className='hidden sm:block whitespace-nowrap'>
                        {p.title}
                      </div>
                    </div>
                  </td>
                  <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell'>
                    <div className='translate-y-px whitespace-nowrap text-slate-200'>
                      {p?.made_at}
                    </div>
                  </td>
                  <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                    <ul className='flex -translate-y-1.5 flex-wrap'>
                      {p.skills.split(',').map((s) => (
                        <li key={s} className='my-1 mr-1.5'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            {s}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className='hidden py-4 align-top sm:table-cell'>
                    {p?.demo && (
                      <a
                        className='flex items-center font-medium leading-tight text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm'
                        href={p.demo}
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        <span className='whitespace-nowrap'>
                          {p.demo.substring(8)}
                        </span>
                        <ArrowUpRight className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5' />
                      </a>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;

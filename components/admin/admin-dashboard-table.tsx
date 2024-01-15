import DeleteButton from '@/components/admin/delete-button';
import Dropdown from '@/components/admin/dropdown';
import { ProjectsType } from '@/lib/type';
import Link from 'next/link';

const AdminDashboardTable = ({ projects }: { projects: ProjectsType }) => {
    return (
        <table id='content' className='w-full border-collapse text-left'>
            <thead className='sticky top-[50px] z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur'>
                <tr>
                    <th className='py-4 pr-8 text-sm font-semibold text-slate-200'>
                        Project
                    </th>
                    <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>
                        Built with
                    </th>
                    <th className='py-4 pr-3 text-right text-sm font-semibold text-slate-200 md:text-right'>
                        Action
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
                                <div className='hidden sm:block'>
                                    {project.title}
                                </div>
                            </div>
                        </td>
                        <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                            <ul className='flex -translate-y-1.5 flex-wrap'>
                                {project.skills.map((skill) => (
                                    <li
                                        key={skill.toString()}
                                        className='mr-1.5 mt-2'
                                    >
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            {skill}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td className='py-4 pr-3'>
                            <Dropdown>
                                <div className='w-full space-y-1 py-2'>
                                    <Link
                                        className='block px-3 py-2 text-center text-xs text-slate-300  hover:bg-zinc-400 hover:text-slate-900'
                                        href={`/dashboard/projects/${project.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <DeleteButton
                                        id={project.id}
                                        image={project.image}
                                    />
                                </div>
                            </Dropdown>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AdminDashboardTable;

import AdminBlogsChart from '@/components/admin/admin-blogs-chart';
import supabase from '@/lib/supabase';
import { Suspense } from 'react';

const Dashboard = async () => {
  const { data: views } = await supabase.from('view_blogs').select();
  const { count: projects } = await supabase
    .from('projects')
    .select('*', { count: 'exact', head: true });
  return (
    <div>
      <div className='grid gap-4 md:grid-cols-2 mb-5'>
        <div className='rounded-xl bg-slate-700 text-slate-200 shadow'>
          <div className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
            <h3 className='tracking-tight text-sm font-medium'>
              Total Projects
            </h3>
          </div>
          <div className='p-6 pt-0'>
            <Suspense fallback={<span>Loading...</span>}>
              <div className='text-2xl font-bold'>{projects}</div>
            </Suspense>
          </div>
        </div>
        <div className='rounded-xl bg-slate-700 text-slate-200 shadow'>
          <div className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
            <h3 className='tracking-tight text-sm font-medium'>Blogs</h3>
          </div>
          <div className='p-6 pt-0'>
            <Suspense fallback={<span>Loading...</span>}>
              <div className='text-2xl font-bold'>{views?.length}</div>
            </Suspense>
          </div>
        </div>
      </div>
      {views ? <AdminBlogsChart data={views} /> : <div>Data not found</div>}
    </div>
  );
};

export default Dashboard;

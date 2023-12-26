import supabase from '@/services/supabase';
const ViewsCounter = async ({ slug }: { slug: string }) => {
    const { data } = await supabase
        .from('view_blogs')
        .select('*')
        .eq('slug', slug);
    return (
        <span className='text-neutral-600 dark:text-neutral-400'>
            {`${data?.at(0)?.views ?? 0} views`}
        </span>
    );
};
export default ViewsCounter;

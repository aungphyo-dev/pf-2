import Link from 'next/link';

const Blogs = () => {
    return (
        <div className='flex min-h-dvh items-center justify-center'>
            <Link href={'/blogs/1'}>Preview</Link>
        </div>
    );
};

export default Blogs;

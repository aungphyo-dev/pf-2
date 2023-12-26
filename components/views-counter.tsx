'use client';
import CountUp from 'react-countup';
const ViewsCounter = ({ views }: { views?: number }) => {
    return (
        <span className='text-neutral-600 dark:text-neutral-400'>
            <CountUp
                start={0}
                end={views ?? 0}
                duration={2}
                separator=' '
                suffix=' Views'
            />
        </span>
    );
};
export default ViewsCounter;

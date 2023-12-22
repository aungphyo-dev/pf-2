import Experiences from '../constants/Experiences';
import {
    ExperienceCard,
    NavigateLink,
    StickyNavigationBar,
} from '@/components';

const Experience = () => {
    return (
        <div aria-label='experience' className='pt-12 lg:pt-24' id='experience'>
            <StickyNavigationBar name={'experience'} />
            <ol className='group/card'>
                {Experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.id}
                        experience={experience}
                    />
                ))}
            </ol>
            <div>
                <NavigateLink
                    content={'view all my abilities'}
                    download={true}
                    link={
                        'https://otgegesmjkdjmcppbsbl.supabase.co/storage/v1/object/public/projects/aungpyaephyo.pdf'
                    }
                />
            </div>
        </div>
    );
};
export default Experience;

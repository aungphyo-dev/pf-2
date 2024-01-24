import {
  ExperienceCard,
  NavigateLink,
  StickyNavigationBar,
} from '@/components';
import experiences from '@/constants/experiences';

const Experience = () => {
  return (
    <div data-section='experience' className='pt-12 lg:pt-24' id='experience'>
      <StickyNavigationBar name={'experience'} />
      <ol className='group/card'>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </ol>
      <div>
        <NavigateLink
          content={'view all my abilities'}
          download={true}
          link={
            'https://lwmbtepbvffzpnixqugu.supabase.co/storage/v1/object/public/projects/aung%20pyae%20phyo.pdf'
          }
        />
      </div>
    </div>
  );
};
export default Experience;

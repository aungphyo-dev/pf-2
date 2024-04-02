import { ExperienceCard, StickyNavigationBar } from '@/components';
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
    </div>
  );
};
export default Experience;

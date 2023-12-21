import {
  About,
  AnimationScreen,
  Contact,
  Experience,
  Footer,
  Hero,
  Project,
} from '@/components';
const HomeWrapper = () => {
  return (
    <main className='relative w-full'>
      <AnimationScreen />
      <div className='min-h-screen w-full'>
        <div className='mx-auto grid max-w-screen-xl grid-cols-1 px-0 lg:grid-cols-2 lg:px-6'>
          <div className='top-0 flex h-auto flex-col items-center justify-start px-3 lg:sticky lg:h-screen lg:px-14'>
            <Hero />
          </div>
          <div className='flex min-h-screen flex-col items-center justify-start px-3 lg:px-16'>
            <About />
            <Experience />
            <Project />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeWrapper;

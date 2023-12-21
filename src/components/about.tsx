const About = () => {
  return (
    <section
      data-section=''
      className='relative w-full bg-transparent  pt-[15px] lg:pt-[5rem]'
      id='about'
    >
      <div className='flex w-full flex-col items-start justify-start'>
        <div className='sticky top-0 z-20 mb-4 w-full bg-slate-950/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
          <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
            About
          </h2>
        </div>
        <p className='text-[16px] leading-[26px] text-[#94a3b8]'>
          Hello, I am Aung Pyae Phyo,I am 20 years old web application developer
          based in Mandalay. I am currently part of the talented team at
          Counter, where I am honing my skills and contributing to innovative
          web projects with tech stacks that include Javascript, ReactJS,
          ReactNative, NextJS, Firebase, Supabase, PHP, Laravel, MySql,
          Postgresql, I am passionate about crafting seamless and captivating
          online experiences. Beyond my dedication to Web Development, I am
          driven by my love for language and culture. I have embarked on a
          journey to learn the Japanese Language, fascinated by its intricacies
          and the doors it can open to a whole new world of understanding. As a
          firm believer in lifelong learning, I am excited to expand my horizons
          and continuously grow both as a developer and a language enthusiast.
        </p>
      </div>
    </section>
  );
};
export default About;

import { StickyNavigationBar } from '@/components';

const About = () => {
  return (
    <section data-section='about' id='about' className='pt-12 lg:pt-24 '>
      <StickyNavigationBar name={'about'} />
      <p className='mb-5 text-[17px] leading-[30px] tracking-wide text-[#94a3b8]'>
        Hello, I am{' '}
        <span className='font-semibold text-slate-200'>Aung Pyae Phyo</span>, I
        am 20 years old frontend developer based in Mandalay. I am currently
        part of the talented team at{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://mml.com.mm'
          className='font-semibold text-slate-200'
        >
          Myanmar Media Linage
        </a>
        , where I am honing my skills and contributing to innovative web
        projects with tech stacks that include Javascript, ReactJS, ReactNative,
        NextJS, PHP, Laravel, MySql, Postgresql,MongoDB, Firebase and Supabase.
      </p>
      <p className='mb-5 text-[17px] leading-[30px] tracking-wide text-[#94a3b8]'>
        I am passionate about crafting seamless and captivating online
        experiences. I have embarked on a journey to learn computer science.
      </p>
      <p className='mb-5 text-[17px] leading-[30px] tracking-wide text-[#94a3b8]'>
        As a firm believer in lifelong learning, I am excited to expand my
        horizons and continuously grow both as a developer and a language
        enthusiast.
      </p>
    </section>
  );
};
export default About;

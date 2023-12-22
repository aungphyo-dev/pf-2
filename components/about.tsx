import { StickyNavigationBar } from '@/components';

const About = () => {
    return (
        <section aria-label='about' id='about'>
            <StickyNavigationBar name={'about'} />
            <p className='mb-5 text-[17px] leading-[30px] tracking-wide text-[#94a3b8]'>
                Hello, I am{' '}
                <span className='font-semibold text-slate-200'>
                    Aung Pyae Phyo
                </span>
                , I am 20 years old web application developer based in Mandalay.
                I am currently part of the talented team at{' '}
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://mml.com.mm'
                    className='font-semibold text-slate-200'
                >
                    Myanmar Media Linage
                </a>
                , where I am honing my skills and contributing to innovative web
                projects with tech stacks that include Javascript, ReactJS,
                ReactNative, NextJS, Firebase, Supabase, PHP, Laravel, MySql,
                Postgresql.
            </p>
            <p className='mb-5 text-[17px] leading-[30px] tracking-wide text-[#94a3b8]'>
                I am passionate about crafting seamless and captivating online
                experiences. Beyond my dedication to Web Development, I am
                driven by my love for language and culture. I have embarked on a
                journey to learn the Japanese Language, fascinated by its
                intricacies and the doors it can open to a whole new world of
                understanding.
            </p>
            <p className='mb-5 text-[17px] leading-[30px] tracking-wide text-[#94a3b8]'>
                As a firm believer in lifelong learning, I am excited to expand
                my horizons and continuously grow both as a developer and a
                language enthusiast.
            </p>
        </section>
    );
};
export default About;

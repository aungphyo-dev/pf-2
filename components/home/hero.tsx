import { NavigationBar, SocialLink } from '@/components';
import Link from 'next/link';
const Hero = () => {
    return (
        <section className='relative w-full' id='home'>
            <div className='flex w-full flex-col items-start justify-start'>
                <div className='mb-3'>
                    <Link
                        href='/public'
                        className='group/typle inline-flex cursor-pointer text-3xl font-bold tracking-wide text-[#e2e8f0] lg:text-[48px] lg:text-slate-200'
                    >
                        Aung Pyae Phyo
                    </Link>
                </div>
                <div className='mb-3'>
                    <p className='max-w-sm text-[20px] font-semibold text-[#e2e8f0]'>
                        Experienced Front-End Developer
                    </p>
                </div>
                <div className='mb-5'>
                    <p className='max-w-sm text-[16px] text-[#94a3b8]'>
                        I build exceptional and accessible digital experiences
                        for the web.
                    </p>
                </div>
                <NavigationBar />
                <div>
                    <div className='flex items-center justify-center space-x-4'>
                        <SocialLink
                            link='https://www.facebook.com/aungpyaephyo1412/'
                            icon={'facebook'}
                        />
                        <SocialLink
                            link='https://www.github.com/aungpyaephyo1412/'
                            icon={'github'}
                        />
                        <SocialLink
                            link='https://www.instagram.com/aungpyaephyo1412/'
                            icon={'instagram'}
                        />
                        <SocialLink
                            link='https://www.twitter.com/typle_x/'
                            icon={'twitter'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;

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
            <div className='mx-auto min-h-screen max-w-screen-xl px-4 py-12 font-sans md:px-8 md:py-20 lg:py-0'>
                <div className='grid-cols-2 lg:grid'>
                    <div className='lg:sticky lg:top-0  lg:max-h-screen  lg:flex-col lg:justify-between lg:py-24'>
                        <Hero />
                    </div>
                    <div className='pt-12 lg:px-8 lg:pt-24'>
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

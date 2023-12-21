import {About, AnimationScreen, Contact, Experience, Footer, Hero, Project} from "@/components";
const HomeWrapper = () => {
    return (
        <main className='relative w-full'>
            <AnimationScreen/>
            <div className='w-full min-h-screen'>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-0 lg:px-6">
                    <div
                        className='h-auto lg:h-screen lg:sticky top-0 flex flex-col justify-start items-center px-3 lg:px-14'>
                        <Hero/>
                    </div>
                    <div className='min-h-screen flex flex-col justify-start items-center px-3 lg:px-16'>
                        <About/>
                        <Experience/>
                        <Project/>
                        <Contact/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomeWrapper;
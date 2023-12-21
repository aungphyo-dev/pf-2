import {NavigationBar, SocialLink} from "@/components";
import Link from "next/link";

const Hero = () => {
    return (
        <section className='w-full relative bg-transparent pt-[15px] lg:pt-[5rem]'  id="home">
            <div className="w-full flex flex-col justify-start items-start">
                <div
                    className="mb-3">
                    <Link href="/"
                        className="cursor-pointer group/typle inline-flex font-semibold lg:text-slate-200 text-3xl lg:text-[48px] text-[#e2e8f0] tracking-wide">
                        Aung Pyae Phyo
                    </Link>
                </div>
                <div
                    className='mb-3'>
                    <p className='text-[#e2e8f0] text-[20px] font-semibold max-w-sm'>
                        Experienced Front-End Developer
                    </p>
                </div>
                <div
                    className='mb-5'>
                    <p className='text-[16px] max-w-sm text-[#94a3b8]'>
                        I build exceptional and accessible digital experiences for the web.
                    </p>
                </div>
                <NavigationBar/>
                <div>
                    <div className='flex justify-center items-center space-x-4'>
                        <SocialLink link="https://www.facebook.com/aungpyaephyo1412/" icon={"facebook"}/>
                        <SocialLink link="https://www.github.com/aungpyaephyo1412/" icon={"github"}/>
                        <SocialLink link="https://www.instagram.com/aungpyaephyo1412/" icon={"instagram"}/>
                        <SocialLink link="https://www.twitter.com/typle_x/" icon={"twitter"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
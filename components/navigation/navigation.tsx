'use client';
import { NavigationButton } from '@/components';
import { navigation_items } from '@/constants/data';
import { useEffect, useRef, useState } from 'react';
const NavigationBar = () => {
    const [activeSection, setActiveSection] = useState<string>('about');
    const sections = useRef<HTMLElement[]>([]);
    const handleScroll = () => {
        const pageYOffset = window.scrollY;
        sections.current.forEach((section) => {
            const { offsetTop, offsetHeight } = section;
            if (
                pageYOffset >= offsetTop &&
                pageYOffset < offsetTop + offsetHeight
            ) {
                setActiveSection(section.id);
            }
        });
    };

    useEffect(() => {
        sections.current = Array.from(
            document.querySelectorAll<HTMLElement>('[data-section]')
        );
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className='nav hidden lg:block'>
            <ul className='mb-9 mt-12 w-max'>
                {navigation_items.map(({ name }) => (
                    <NavigationButton
                        key={name}
                        name={name}
                        activeSection={activeSection}
                    />
                ))}
            </ul>
        </nav>
    );
};
export default NavigationBar;

"use client"
import {useEffect, useRef, useState} from "react";
import {GoSection} from "@/lib/utils";

const NavigationBar = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
                if (visibleSection) {
                    setActiveSection(visibleSection.id);
                }
            }
        );
        const sections = document.querySelectorAll<HTMLElement>('[data-section]');
        sections.forEach((section) => {
            observer.current?.observe(section);
        });
        return () => {
            sections.forEach((section) => {
                observer.current?.unobserve(section);
            });
        };
    }, []);
    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-12 mb-9 w-max">
                <li className={activeSection === "about" ? "active" : ""}>
                    <button onClick={() => GoSection("about")} className="group flex items-center py-3"><span
                        className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                        className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                    </button>
                </li>
                <li className={activeSection === "experience" ? "active" : ""}>
                    <button onClick={() => GoSection("experience")} className="group flex items-center py-3 "><span
                        className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                        className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                    </button>
                </li>
                <li className={activeSection === "projects" ? "active" : ""}>
                    <button onClick={() => GoSection("projects")} className="group flex items-center py-3 "><span
                        className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                        className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}
export default NavigationBar
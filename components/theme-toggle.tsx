'use client';
import { Moon, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <button
            className='z-50 flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 font-semibold text-white dark:bg-white dark:text-black'
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
            }}
        >
            {theme === 'light' ? (
                <SunMoon className='h-4 w-4' />
            ) : (
                <Moon className='h-4 w-4' />
            )}
        </button>
    );
}

export default ThemeToggle;

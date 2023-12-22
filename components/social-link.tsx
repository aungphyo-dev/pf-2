import React from 'react';
import { Facebook, Github, Instagram, Twitter } from 'lucide-react';
const SocialLink = ({ link, icon }: { link: string; icon: string }) => {
    return (
        <a
            target='blank'
            rel='noreferrer'
            href={link}
            className='text-2xl font-bold text-slate-400 transition-colors duration-500 hover:text-slate-200'
        >
            <ICON name={icon} />
        </a>
    );
};

export default SocialLink;

export const ICON = ({ name }: { name: string }) => {
    switch (name) {
        case 'facebook':
            return <Facebook />;
        case 'instagram':
            return <Instagram />;
        case 'github':
            return <Github />;
        case 'twitter':
            return <Twitter />;
    }
};

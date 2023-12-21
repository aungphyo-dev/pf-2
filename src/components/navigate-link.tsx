import React from 'react';
import Link from "next/link";
import {MoveUpRight} from "lucide-react";
const NavigateLink = ({link,download,content}:{
    link : string,
    download ?: boolean,
    content : string
}) => {
    return (
        <div>
            <Link download={download} href={link} className='text-slate-400 hover:underline group'>
                {content}
                <MoveUpRight size={20} className='transition duration-500 ml-1 inline-flex group-hover:translate-x-1'/>
            </Link>
        </div>
    );
};

export default NavigateLink;

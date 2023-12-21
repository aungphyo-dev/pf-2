import React from 'react';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
const NavigateLink = ({
  link,
  download,
  content,
}: {
  link: string;
  download?: boolean;
  content: string;
}) => {
  return (
    <div>
      <Link
        download={download}
        href={link}
        className='group text-slate-400 hover:underline'
      >
        {content}
        <MoveUpRight
          size={20}
          className='ml-1 inline-flex transition duration-500 group-hover:translate-x-1'
        />
      </Link>
    </div>
  );
};

export default NavigateLink;

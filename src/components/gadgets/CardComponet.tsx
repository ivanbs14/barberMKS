import React from 'react';
import { DM_Serif_Display } from "next/font/google";
import { cardDataProps } from '@/lib/cards';

const configDM = DM_Serif_Display({ 
	weight: ['400'],
	subsets: ["latin"],
});

const CardComponent: React.FC<cardDataProps> = ({ img: Icon, title, subtitle }) => {
  return (
    <div className='w-[20rem] flex flex-col items-start gap-3'>
      <Icon className="rotate-0 w-[3rem] h-[3rem] text-yellow-500	"/>
      <h2 className={`text-2xl ${configDM.className}`}>{title}</h2>
      <p className='text-start text-sm'>{subtitle}</p>
    </div>
  );
};

export default CardComponent;
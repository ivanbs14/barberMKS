import { useState } from "react";
import Link from "next/link";
import barberIMG from '@/assets/imgs/mks.jpeg';
import Image from "next/image";

const links = [
   { href: '#start', text: 'Inicio' },
   { href: '#about', text: 'Sobre' },
   { href: '#contato', text: 'Contato' }
];

export default function Header() {
   const [isSelected, setIsSelected] = useState(false);

   return (
      <nav className="w-[100%] flex justify-between items-center fixed z-50 top-0 px-20 py-3">
         <Image
            src={barberIMG}
            alt="imagem ilustrativa"
            className="w-[5rem] h-[5rem] rounded-full"
         />
         
         <div className="flex gap-7">
            {links.map((link, index) => (
               <Link key={index} passHref href={link.href}>
                  <button className="text-lg transition-all duration-300 hover:text-xl">{link.text}</button>
               </Link>
            ))}
         </div>
      </nav>
   )
}
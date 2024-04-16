import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Button } from "./ui/button";
import contactIMG from '@/assets/imgs/contactImg.png';

const configDM = DM_Serif_Display({ 
	weight: ['400'],
	subsets: ["latin"],
});

const backgroundImageStyle = {
   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contactIMG.src})`,
   backgroundSize: "cover",
   width: '100%',
   height: '100vh',
};

export default function Contact() {

   return (
      <section id="contato" className="h-[100%] flex flex-col justify-center items-center gap-4" style={backgroundImageStyle}>
         <h1 className={`text-4xl tracking-wide	 ${configDM.className}`}>Marcar seu novo estilo</h1>
         <h3 className="text-2xl	mb-5">Serviço personalizado no seu tempo e na sua residência.</h3>
         <Button variant="outline" 
            className={`${configDM.className} py-8 px-12 bg-[#c90] border-none text-3xl tracking-wider	shadow-lg shadow-gray-300/20 `}
         >
            <a href="https://wa.me/558589527541" target="_blank" rel="noopener noreferrer">
               Agende seu estilo
            </a>
         </Button>
      </section>
   )
}

import { Button } from "@/components/ui/button"
import { DM_Serif_Display } from "next/font/google";
import StartIMG from '@/assets/imgs/StartIMG.jpeg';


const configDM = DM_Serif_Display({ 
	weight: ['400'],
	subsets: ["latin"],
});

const backgroundImageStyle = {
   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${StartIMG.src})`,
   backgroundSize: "cover",
   width: '100%',
   height: '100vh',
};

export default function Start() {

   return (
      <section id="start" className="h-[100%] flex flex-1 flex-col justify-center items-center text-center" style={backgroundImageStyle}>
         <h1 className={`${configDM.className} text-5xl tracking-wide mb-5`}>Mais que um serviço, uma experiência de estilo</h1>
         <h2 className="text-3xl	mb-2">Transformando aparências, elevando confianças</h2>
         <h2 className="text-3xl	mb-5">Atendimento personalizado na sua residência</h2>

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
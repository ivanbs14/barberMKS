
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import aboutOne from '@/assets/imgs/aboutImgOne.jpg';
import aboutTwo from '@/assets/imgs/aboutImgTwo.jpg';
import aboutThree from '@/assets/imgs/aboutImgThree.jpg';
import Services from "./Services";

const configDM = DM_Serif_Display({ 
	weight: ['400'],
	subsets: ["latin"],
});

export default function About() {

   return (
      <section id="about" className="h-[100%] flex flex-col justify-center items-center gap-4">
         <h1 className={`text-4xl tracking-wide	 ${configDM.className}`}>Sobre</h1>
         <div className="flex justify-center items-center gap-10 text-center ">
            <div className="w-[60%] text-left flex flex-col gap-2">
               <h1 className={`${configDM.className} text-2xl tracking-wide	`}>O Barbeiro: Maestria e Tradição</h1>
               <h2 className="text-lg	">Conheça o Ofício de um Verdadeiro Mestre da Navalha</h2>
               <p className="text-sm text-gray-400">Na calma de um barbeiro tradicional, o Sr. Melk demonstra uma paixão que vai além de cortar cabelo 
                  e aparar barba. Cada corte é uma obra de arte, refletindo anos de prática e um profundo 
                  respeito pela tradição. Sua habilidade vai além do manejo da lâmina; ele cria um ambiente 
                  onde os clientes se sentem à vontade para relaxar e desfrutar de uma experiência que transcende o 
                  simples ato de se arrumar. Para o Sr. Melk, a barbearia não é apenas um trabalho, é uma vocação 
                  - um lugar onde ele pode expressar sua criatividade e honrar as tradições do passado, 
                  enquanto ajuda os clientes a se sentirem confiantes e bem-cuidados. Se você ainda não teve o 
                  privilégio de conhecer um verdadeiro mestre da navalha, não perca a oportunidade de experimentar 
                  a maestria e a tradição que ele oferece.
               </p>
            </div>
            <div className="flex gap-2">
               <div className="flex flex-col gap-2">
                  <Image
                     src={aboutTwo}
                     alt="imagem ilustrativa"
                     className="w-[100%]"
                  />

                  <Image
                     src={aboutOne}
                     alt="imagem ilustrativa"
                     className="w-[100%]"
                  />
               </div>
               <Image
                  src={aboutThree}
                  alt="imagem ilustrativa"
                  className="w-[70%]"
               />
            </div>
         </div>
         <Services />
      </section>
   )
}
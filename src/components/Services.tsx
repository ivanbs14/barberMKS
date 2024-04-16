
import { DM_Serif_Display } from "next/font/google";
import { cardData, cardDataProps } from "@/lib/cards";
import CardComponent from "./gadgets/CardComponet";

const configDM = DM_Serif_Display({ 
	weight: ['400'],
	subsets: ["latin"],
});

export default function Services() {

   return (
      <section className="w-full flex flex-col justify-center items-center gap-5">
         <h1 className={`text-4xl tracking-wide	 ${configDM.className}`}>Serviços</h1>
         <div className="w-full flex justify-evenly">
            {cardData.map((card: cardDataProps, index: number) => (
               <CardComponent
                  key={index}
                  img={card.img}
                  title={card.title}
                  subtitle={card.subtitle}
               />
            ))}
         </div>
      </section>
   )
}
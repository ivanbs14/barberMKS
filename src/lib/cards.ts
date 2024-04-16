import { RxScissors } from "react-icons/rx";
import { GiBeard, GiRazor } from "react-icons/gi";

import { IconType } from "react-icons";

export interface cardDataProps {
   img: IconType;
   title: string;
   subtitle: string;
}

export const cardData: cardDataProps[] = [
   {
      img: RxScissors,
      title: 'Corte de Cabelo',
      subtitle: "Descubra a arte do corte de cabelo. Variedade de estilos personalizados, garantindo resultados impecáveis. Experiência de relaxamento e cuidado pessoal."
   },
   {
      img: GiRazor,
      title: 'Barbear',
      subtitle: "serviço de barbear personalizado, Com atenção meticulosa aos detalhes, adaptando às suas necessidades e estilo pessoal. Do clássico ao contemporâneo."
   },
   {
      img: GiBeard,
      title: 'Barba',
      subtitle: "Valorizando a singularidade da sua barba. Serviços personalizados para cuidar e estilizar sua barba de acordo com suas preferências exclusivas. "
   },

];

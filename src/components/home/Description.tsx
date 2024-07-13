import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaUserEdit } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { RiShakeHandsLine } from "react-icons/ri";
import DescriptionCard from "./DescriptionCard";

const Description = () => {
  return (
    <div className="bg-black mb-40 flex flex-col items-center">
      <div className="flex justify-center items-center">
        <div className="text-center">
          <h1 className="mt-28 text-[20px] sm:text-[30px] md:text-3xl xl:text-5xl font-extrabold text-customLightGreen mb-8">
            Por que nos visitar?
          </h1>
          <p className="w-full xl:w-144 px-2 text-customLightGreen max-w-full font-semibold text-sm xl:text-lg">
            Elevamos sua experiência ao máximo e passamos confiança através de
            nossa responsabilidade com nossos convidados.
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-16">
        <DescriptionCard
          title="Localização"
          description="R. Maria Cristina, 50 - Casqueiro, Cubatão - SP, 11533-160"
        >
          <GrLocation className="text-4xl md:text-5xl text-amber-950" />
        </DescriptionCard>

        <DescriptionCard
          title="Experiência Única"
          description="Nossos eventos visam proporcionar muita diversão"
        >
          <FaUserEdit className="text-4xl md:text-5xl text-amber-950" />
        </DescriptionCard>

        <DescriptionCard
          title="Segurança"
          description="Controlamos o acesso ao evento"
        >
          <LuClipboardList className="text-4xl md:text-5xl text-amber-950" />
        </DescriptionCard>

        <DescriptionCard
          title="Suporte"
          description="Temos voluntários que estarão a disposição do convidado"
        >
          <RiShakeHandsLine className="text-4xl md:text-5xl text-amber-950" />
        </DescriptionCard>
      </div>
    </div>
  );
};

export default Description;

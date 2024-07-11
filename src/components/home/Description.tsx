import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaUserEdit } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { RiShakeHandsLine } from "react-icons/ri";

const Description = () => {
  return (
    <div className="bg-black mb-40 flex flex-col">
      <div className="flex justify-center items-center">
        <div className="text-center">
          <h1 className=" mt-28 text-[20px] sm:text-[30px] md:text-3xl xl:text-5xl font-extrabold text-customLightGreen mb-8">
            Por que nos visitar?
          </h1>
          <p className="w-144 text-customLightGreen max-w-full font-bold text-lg">
            Elevamos sua experiência ao máximo e passamos confiança através de
            nossa responsabilidade com nossos convidados.
          </p>
        </div>
      </div>

      <div className="space-x-8 flex flex-wrap justify-center mt-16">
        <div className="w-56 h-56 bg-greenxd rounded-lg border p-4">
          <div className="bg-white w-20 h-20 rounded-lg border flex items-center justify-center mb-2">
            <GrLocation className="text-5xl text-amber-950" />
          </div>
          <div>
            <h1 className="font-bold mb-2 text-green-950">Localização</h1>
            <p className="max-w-full text-sm font-semibold text-green-900">
              R. Maria Cristina, 50 - Casqueiro, Cubatão - SP, 11533-160
            </p>
          </div>
        </div>

        <div className="w-56 h-56 bg-greenxd rounded-lg border p-4">
          <div className="bg-white w-20 h-20 rounded-lg border flex items-center justify-center mb-2">
            <FaUserEdit className="text-5xl text-amber-950" />
          </div>
          <div>
            <h1 className="font-bold mb-2 text-green-950">Experiência Única</h1>
            <p className="max-w-full text-sm font-semibold text-green-900">
              Nossos eventos visam proporcionar muita diversão.
            </p>
          </div>
        </div>

        <div className="w-56 h-56 bg-greenxd rounded-lg border p-4">
          <div className="bg-white w-20 h-20 rounded-lg border flex items-center justify-center mb-2">
            <LuClipboardList className="text-5xl text-amber-950" />
          </div>
          <div>
            <h1 className="font-bold mb-2 text-green-950">Segurança</h1>
            <p className="max-w-full text-sm font-semibold text-green-900">
              Controlamos o acesso ao evento
            </p>
          </div>
        </div>

        <div className="w-56 h-56 bg-greenxd rounded-lg border p-4">
          <div className="bg-white w-20 h-20 rounded-lg border flex items-center justify-center mb-2">
            <RiShakeHandsLine className="text-5xl text-amber-950" />
          </div>
          <div>
            <h1 className="font-bold mb-2 text-green-950">Suporte</h1>
            <p className="max-w-full text-sm font-semibold text-green-900">
              Temos voluntários que estarão a disposição do convidado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

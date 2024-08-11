import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row justify-center items-center mt-20">
      <div
        className="relative h-64 w-64 sm:w-80 sm:h-100 md:w-96 md:h-128 xl:w-128 xl:h-144 2xl:w-144 2xl:h-160 rounded-2xl">
        <Image
          src="/images/festa.webp"
          alt="Festa image"
          fill
          style={{
            objectFit: "contain",
            borderRadius: "1rem",
          }}
        />
      </div>
      <div className="w-full xl:w-5/12 mt-4 flex justify-center xl:justify-end">
        <div className="flex flex-col w-[65%] text-center xl:text-start">
          <div className="mt-2">
            <p className="text-2xl md:text-3xl xl:text-[40px] text-customLightGreen font-extrabold leading-normal">
              Não é a primeira vez que organizamos algo!
            </p>
          </div>
          <div className="mt-8">
            <p className="text-sm xl:text-[18px] text-customLightGreen font-semibold leading-relaxed">
              Já organizamos eventos abertos como Halloween e Festa Junina, que
              foram um grande sucesso e contaram com ampla participação da
              comunidade.
            </p>
          </div>
          <div className="mt-12 flex max-[360px]:flex-col flex-row justify-between">
            <div className="hidden xl:block text-customLightGreen font-bold text-[15px] md:text-2xl xl:text-4xl">
              1+{" "}
              <span className="block text-base font-medium mt-1">
                Eventos disponíveis
              </span>
            </div>
            <div className="text-customLightGreen font-bold text-[15px] md:text-2xl xl:text-4xl">
              2+{" "}
              <span className="block text-base font-medium mt-1">
                Eventos realizados
              </span>
            </div>
            <div className="text-customLightGreen font-bold text-[15px] md:text-2xl xl:text-4xl">
              400+{" "}
              <span className="block text-base font-medium mt-1">
                Participantes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

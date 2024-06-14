import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="mb-20 bg-black">
      <div className="flex flex-row justify-center">
        <div className="w-5/12 flex items-center justify-end mr-26">
          <Image
            src="/images/festa.webp"
            alt="Festa image"
            width={640}
            height={484}
            className="rounded-2xl"
          />
        </div>
        <div className="w-5/12 mt-4">
          <div className="flex flex-col w-[65%]">
            <div className="mt-2">
              <p className="text-[24px] sm:text-[32px] xl:text-[40px] text-customLightGreen font-extrabold leading-normal">
                Não é a primeira vez que organizamos algo!
              </p>
            </div>
            <div className="mt-8">
              <p className="text-sm sm:text-[12px] xl:text-[18px] text-customLightGreen font-bold leading-relaxed">
                Já organizamos eventos abertos como Halloween e Festa Junina,
                que foram um grande sucesso e contaram com ampla participação da
                comunidade.
              </p>
            </div>
            <div className="mt-12 flex flex-row justify-between">
              <div className="text-customLightGreen font-bold text-[15px] md:text-2xl xl:text-5xl">
                99+{" "}
                <span className="block text-lg font-medium mt-1">
                  Eventos disponíveis
                </span>
              </div>
              <div className="text-customLightGreen font-bold text-[15px] md:text-2xl xl:text-5xl">
                99+{" "}
                <span className="block text-lg font-medium mt-1">
                  Eventos disponíveis
                </span>
              </div>
              <div className="text-customLightGreen font-bold text-[15px] md:text-2xl xl:text-5xl">
                100+{" "}
                <span className="block text-lg font-medium mt-1">
                  Participantes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

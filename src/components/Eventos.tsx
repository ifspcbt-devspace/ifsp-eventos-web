import React from "react";
import Image from "next/image";

const Events = () => {
  return (
    <div className="pt-[20px] md:pt-[20px] pb-[12rem] bg-black w-full flex flex-col items-center">
      
        <div className="text-center">
          <h1 className="mt-2 text-[20px] sm:text-[30px] md:text-3xl xl:text-3xl font-bold text-customLightGreen mb-4">
            Nossos Próximos Eventos
          </h1>
        </div>

      <div className="mt-8 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-3/6 gap-8">
        <div className="flex flex-col bg-greenxd rounded-2xl col-span-1 row-span-1">
          <div className="relative w-full h-56 object-contain">
            <Image
              src="/images/festajunina.jpg"
              alt="festajunina"
              quality={100}
              fill
              className="rounded-t-xl"
            />
          </div>
          <div className="h-28 flex flex-col items-center justify-between py-2">
            <div className="text-center font-bold text-greens">
              Festa Junina - 29/06
            </div>
            <div className="font-semibold text-center text-greenp text-[14px]">
              0/500 Participantes
            </div>

            <div className="flex flex-row justify-between items-center w-9/12">
              <button className="text-[13px] bg-greenp hover:bg-slate-600 transition-all duration-200 text-white font-semibold px-[0.65rem] py-[0.3rem] rounded-[5px]">
                Inscrever
              </button>

              <p className="font-bold text-greens">Grátis</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-greenxd rounded-2xl col-span-1 row-span-1">
          <div className="relative w-full h-56 object-contain">
            <Image
              src="/images/festajunina.jpg"
              alt="festajunina"
              quality={100}
              fill
              className="rounded-t-xl"
            />
          </div>
          <div className="h-28 flex flex-col items-center justify-between py-2">
            <div className="text-center font-bold text-greens">
              Festa Junina - 29/06
            </div>
            <div className="font-semibold text-center text-greenp text-[14px]">
              0/500 Participantes
            </div>

            <div className="flex flex-row justify-between items-center w-9/12">
              <button className="text-[13px] bg-greenp hover:bg-slate-600 transition-all duration-200 text-white font-semibold px-[0.65rem] py-[0.3rem] rounded-[5px]">
                Inscrever
              </button>

              <p className="font-bold text-greens">Grátis</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-greenxd rounded-2xl col-span-1 row-span-1">
          <div className="relative w-full h-56 object-contain">
            <Image
              src="/images/festajunina.jpg"
              alt="festajunina"
              quality={100}
              fill
              className="rounded-t-xl"
            />
          </div>
          <div className="h-28 flex flex-col items-center justify-between py-2">
            <div className="text-center font-bold text-greens">
              Festa Junina - 29/06
            </div>
            <div className="font-semibold text-center text-greenp text-[14px]">
              0/500 Participantes
            </div>

            <div className="flex flex-row justify-between items-center w-9/12">
              <button className="text-[13px] bg-greenp hover:bg-slate-600 transition-all duration-200 text-white font-semibold px-[0.65rem] py-[0.3rem] rounded-[5px]">
                Inscrever
              </button>

              <p className="font-bold text-greens">Grátis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

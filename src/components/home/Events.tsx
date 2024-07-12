import React from "react";
import Image from "next/image";

const Events = () => {
  return (
    <div className="mt-5 mb-80 bg-black w-full flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-customLightGreen">
          Nossos Próximos Eventos
        </h1>
      </div>

      <div className="mt-16 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        <div className="flex flex-col bg-greenxd rounded-2xl col-span-1 row-span-1 h-98 w-80">
          <div className="relative w-full h-80 object-contain">
            <Image
              src="/images/festajunina.jpg"
              alt="festajunina"
              quality={100}
              fill
              className="rounded-t-xl"
            />
          </div>
          <div className="flex-1 flex flex-col items-center py-2">
            <div className="text-center font-bold text-greens mb-4">
              Festa Junina - 29/06
            </div>
            <div className="font-semibold text-center text-greenp text-[14px] mb-3">
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

        <div className="flex flex-col bg-greenxd rounded-2xl col-span-1 row-span-1 h-98 w-80">
          <div className="relative w-full h-80 object-contain">
            <Image
              src="/images/festajunina.jpg"
              alt="festajunina"
              quality={100}
              fill
              className="rounded-t-xl"
            />
          </div>
          <div className="flex-1 flex flex-col items-center py-2">
            <div className="text-center font-bold text-greens mb-4">
              Festa Junina - 29/06
            </div>
            <div className="font-semibold text-center text-greenp text-[14px] mb-3">
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

        <div className="flex flex-col bg-greenxd rounded-2xl col-span-1 row-span-1 h-98 w-80">
          <div className="relative w-full h-80 object-contain">
            <Image
              src="/images/festajunina.jpg"
              alt="festajunina"
              quality={100}
              fill
              className="rounded-t-xl"
            />
          </div>
          <div className="flex-1 flex flex-col items-center py-2">
            <div className="text-center font-bold text-greens mb-4">
              Festa Junina - 29/06
            </div>
            <div className="font-semibold text-center text-greenp text-[14px] mb-3">
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

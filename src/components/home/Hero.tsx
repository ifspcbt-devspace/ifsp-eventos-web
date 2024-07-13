import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {


  return (
    <div className="flex flex-col xl:flex-row items-center justify-center mt-12 mb-12">
      <div className="xl:mr-40 text-center xl:text-start">
        <div className="w-full xl:max-w-100 pb-8">
          <span className="text-customLightGreen font-extrabold text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl">
            Viva novas experiências
          </span>
        </div>

        <p className="mt-8 text-small 2xl:text-lg text-customLightGreen px-6 xl:px-0 xl:w-90 font-bold">
          Não deixe para depois: explore nosso catálogo de eventos que ocorrem
          anualmente no IFSP Cubatão.
        </p>

        <div className="mt-14">
          <Link  href="/#eventos" scroll className="rounded-lg px-6 hover:bg-slate-300 transition-all duration-200 py-3 text-base xl:text-lg font-semibold bg-customLightGreen text-black">
            Ver eventos
          </Link>
        </div>
      </div>

      <div className="mt-6 xl:mt-0">
        <div className="relative h-72 w-72 sm:w-80 sm:h-100 md:w-96 md:h-128 xl:w-128 xl:h-144 2xl:w-144 2xl:h-160">
          <Image
            src="/images/homemfesta.png"
            alt="Homem Festa"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

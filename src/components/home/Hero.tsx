import React from "react";
import './hero.css';
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full py-20 grid grid-cols-10 light-color-gradient text-black px-12 xl:px-0">
      <div className={`col-start-1 col-span-10 xl:col-start-3 xl:col-span-6 grid grid-rows-2 xl:grid-rows-1 gap-4 hero-grid`}>
        <div className={`col-span-2 row-start-2 xl:row-start-1 xl:row-span-2 xl:col-span-1 xl:max-w-[500px]`}>
          <span className={`heading`}>
          Divirta-se em nossos eventos
          </span>

          <p className={`opacity-80 font-normal mb-8 block leading-7 text-xl`}>
            Não deixe para depois: explore nosso catálogo de eventos que ocorrem anualmente no IFSP Cubatão
          </p>

          <Link href="/events" className="hero-button">Visualizar</Link>
        </div>

        <div className={`col-span-2 row-start-1 xl:row-span-2 xl:col-span-1 flex justify-end`}>
          <Image src={`/images/hero.svg`} alt={"hero image"} width={337} height={331}/>
        </div>

      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import './hero.css';
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full py-20 grid grid-cols-10 light-color-gradient text-black">
      <div className={`col-start-3 col-span-6 grid grid-cols-2 gap-x-4 hero-grid`}>
        <div className={`max-w-[500px]`}>
          <span className={`heading`}>
          Divirta-se em nossos eventos
          </span>

          <p className={`opacity-80 font-normal mb-8 block leading-7 text-xl`}>
            Não deixe para depois: explore nosso catálogo de eventos que ocorrem anualmente no IFSP Cubatão
          </p>

          <Link href="/events" className="button w-button">Visualizar</Link>
        </div>

        <div className={`flex justify-end`}>
          <Image src={`/images/hero.svg`} alt={"hero image"} width={337} height={331}/>
        </div>

      </div>
    </div>
  );
};

export default Hero;

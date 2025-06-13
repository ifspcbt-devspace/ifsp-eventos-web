import React from 'react';
import './hero.css';
import Link from 'next/link';
import { RiShining2Fill } from 'react-icons/ri';

const Hero = () => {
  return (
    <div className='light-color-gradient grid w-full grid-cols-10 px-4 py-20 text-black xl:px-0'>
      <div
        className={`hero-grid col-span-10 col-start-1 grid grid-rows-2 gap-4 xl:col-span-6 xl:col-start-3 xl:grid-rows-1`}
      >
        <div
          className={`col-span-2 row-start-2 xl:col-span-1 xl:row-span-2 xl:row-start-1 xl:max-w-[500px]`}
        >
          <span className={`heading`}>Divirta-se em nossos eventos</span>

          <p className={`mb-8 block text-xl leading-7 font-normal opacity-80`}>
            Não deixe para depois: explore nosso catálogo de eventos que ocorrem
            anualmente no IFSP Cubatão
          </p>

          <Link href='/events' className='hero-button'>
            Visualizar
          </Link>
        </div>

        <div
          className={`col-span-2 row-start-1 flex justify-end xl:col-span-1 xl:row-span-2`}
        >
          <RiShining2Fill size={330} className={`text-[#000]`} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

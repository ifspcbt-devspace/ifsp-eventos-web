import Image from 'next/image';
import React from 'react';

const Menu = () => {
  return (
    <div className="w-[73%] mx-auto mt-28 mb-20 py-2 ">
      <div className='relative'>
        <h1 className="text-customLightGreen text-3xl md:text-5xl 2xl:text-5xl font-bold">Viva novas</h1>
        <h2 className="text-customLightGreen text-xl md:text-5xl 2xl:text-5xl font-bold mt-2">experiências</h2>
        <p className='mt-8 text-base md:text-lg 2xl:text-lg text-customLightGreen w-[300px] max-w-full font-medium'>
          Não deixe para depois: explore nosso catálogo de eventos que ocorrem anualmente no IFSP Cubatão.
        </p>
      </div>

      <div className='hidden sm:block absolute top-20 right-0 w-72 h-72 sm:w-80 sm:h-100 md:w-96 md:h-120 xl:w-120 xl:h-140 2xl:w-140 2xl:h-160 sm:right-8 md:right-4 xl:right-4 2xl:right-4 lg:right-28 xl:right-44 2xl:right-44'>
        <Image src="/images/homemfesta.png" alt="Homem Festa" layout="fill" objectFit="cover" />
      </div>

      <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-4'>
        <button className='rounded-lg px-[0.95rem] hover:bg-slate-300 transition-all duration-200 py-[0.68rem] text-[16px] font-semibold bg-customLightGreen text-black flex items-center space-x-2'>
          <p>Saiba Mais</p>
        </button>
      </div>
    </div>
  );
};

export default Menu;

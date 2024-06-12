import Image from 'next/image';
import React from 'react';

const Menu = () => {
  return (
    <div className="w-[73%] mx-auto mt-28 mb-20 py-2 ">
      <div className='relative'>
        <h1 className="text-customLightGreen text-3xl md:text-5xl font-bold">Viva novas</h1>
        <h2 className="text-customLightGreen text-xl md:text-5xl font-bold mt-2">experiências</h2>
        <p className='mt-8 text-sm md:text-1xl text-customLightGreen w-[300px] max-w-full font-medium'>
          Não deixe para depois: explore nosso catálogo de eventos que ocorrem anualmente no IFSP Cubatão.
        </p>
      </div>

      <div className='hidden sm:block absolute top-20 right-0 w-60 h-60 sm:w-64 sm:h-92 md:w-96 md:h-100 sm:right-8 md:right-4 lg:right-28 xl:right-44'>
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
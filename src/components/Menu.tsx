import Image from 'next/image';
import React from 'react';

const Menu = () => {
  return (
    <div className="w-[78%] mx-auto mt-20 mb-20">
      <div className='relative'>
        <h1 className="text-customLightGreen text-3xl md:text-4xl font-bold mt-4 md:mt-8 lg:mt-10 xl:mt-10">Viva novas</h1>
        <h2 className="text-customLightGreen text-xl md:text-3xl font-bold mt-2">experiências</h2>
        <p className='mt-6 text-sm md:text-base text-customLightGreen w-[310px] max-w-full font-semibold'>
          Não deixe para depois: explore nosso catálogo de eventos que ocorrem anualmente no IFSP Cubatão.
        </p>
      </div>

      <div className='hidden sm:block absolute top-16 right-0 w-60 h-60 sm:w-64 sm:h-92 md:w-64 md:h-110 lg:w-80 lg:h-110 xl:w-90 xl:h-100 sm:right-8 md:right-16 lg:right-28 xl:right-40'>
        <Image src="/images/homemfesta.png" alt="Homem Festa" layout="fill" objectFit="cover" />
      </div>

      <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-4'>
        <button className='rounded-lg px-[0.95rem] hover:bg-slate-600 transition-all duration-200 py-[0.68rem] text-[16px] font-semibold bg-customLightGreen text-black flex items-center space-x-2'>
          <p>Saiba Mais</p>
        </button>
      </div>
    </div>
  );
};

export default Menu;

<div className=' w-[78%] mx-auto mt-20 mb-20'>

</div>
import React from 'react';
import Image from 'next/image';

const Introduction = () => {
  return (
    <div className=' w-[78%] mx-auto bg-black pb-[2rem] pt-[1rem]  md:pt-[4rem] flex flex-col'>
      <div className=' relative'>
      <h1 className=' text-[20px] sm:text-[30px] md:text-3xl xl:text-3xl  font-bold text-customLightGreen right-3 md:right-[650px] xl:right-20 absolute px-5 xl:px-[11px] text-left top-4 xl:top-32 '>Não é a primeira vez <span className='block'>que organizamos algo!</span></h1>
      <p className='text-[12px] sm:text-[12px] md:text-[16px] xl:text-[16px] top-44 sm:top-[120px] md:top-36 xl:top-56 absolute right-3 sm:right-[200px] md:right-[605px] xl:right-8 w-[380px] text-customLightGreen max-w-full font-semibold px-4 xl:px-0'>Já organizamos eventos abertos como Halloween e Festa Junina, que foram um grande sucesso e contaram com ampla participação da comunidade.</p>

      <div className="flex flex-col mx-auto pb-[20rem] pt-[4rem] ">
         <div className=' relative'></div>
         <div className=' mr-20 top-[350px] xl:top-[320px] absolute -right-3 md:right-20 xl:right-[195px]'>
          <h1 className='text-customLightGreen'>
            <span className=' font-bold text-[15px] xl:text-[42px]'>99+</span>
            <span className='block text-1xl'>Eventos disponíveis</span>
          </h1>

          
        </div>

        <div className=' mr-20 top-[440px] xl:top-[320px] absolute -right-3 md:right-20 xl:right-11'>
          <h1 className='text-customLightGreen'>
            <span className=' font-bold text-[15px] xl:text-[42px]'>99+</span>
            <span className='block text-1xl'>Eventos finalizados</span>
          </h1>
        </div>
        <div className='mr-20 top-[350px] xl:top-[320px] absolute -right-7 md:right-[650px] xl:right-[18px] w-[10px]'>
  <h1 className='text-customLightGreen'>
    <span className='font-bold text-[15px] xl:text-[42px]'>100+</span>
    <span className='block text-[15px] xl:text-1xl'>Participantes</span>
  </h1>
</div>

<div className='hidden sm:block absolute xl:top-[140px] md:top-8 right-0 w-60 h-60 sm:w-64 sm:h-92 md:w-64 md:h-110 lg:w-80 lg:h-110 xl:w-90 xl:h-100 sm:right-8 md:right-16 lg:right-28 xl:right-[595px]'>
<Image src="/images/festa.webp" alt="Festa image" width={500} height={500} className='rounded-2xl' />
</div>

      </div>
      </div>
    </div>


  );
}

export default Introduction;




























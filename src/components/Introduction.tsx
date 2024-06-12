import React from 'react'
import Image from 'next/image';

const Introduction = () => {
  return (
    <div className='flex flex-col mx-auto mb-20 bg-black w-[100%] h-80'>
    <div className='relative'>
    <h1 className=' text-[1em] sm:text-[30px] md:text-3xl xl:text-3xl  font-bold text-customLightGreen right- md:right-[650px] xl:right-56 absolute text-left top-4'>Não é a primeira vez <span className='block'>que organizamos algo!</span></h1>
    <p className='text-sm sm:text-[12px] md:text-[16px] xl:text-[16px] top-44 sm:top-[120px] md:top-36 xl:top-28 -right-2 sm:right-[200px] md:right-[605px] xl:right-36 w-[410px] text-customLightGreen max-w-full font-medium absolute'>Já organizamos eventos abertos como Halloween e Festa Junina, que foram um grande sucesso e contaram com ampla participação da comunidade.</p>
    <h1 className='text-customLightGreen font-bold text-[15px] md:text-2xl xl:text-4xl top-44 sm:top-[120px] md:top-36  absolute right-[25rem] mt-20'> 99+ <span className='block text-[1rem] font-medium'>Eventos disponíveis</span></h1>
    <h1 className='text-customLightGreen font-bold text-[15px] md:text-2xl xl:text-4xl top-44 sm:top-[120px] md:top-36  absolute right-[14rem] mt-20'> 99+ <span className='block text-[1rem] font-medium'>Eventos disponíveis</span></h1>
    <h1 className='text-customLightGreen font-bold text-[15px] md:text-2xl xl:text-4xl top-44 sm:top-[120px] md:top-36  absolute right-[6.5rem] mt-20'> 100+ <span className='block text-[1rem] font-medium'>Participantes</span></h1>

    <div className='hidden sm:block absolute md:top-4 xl:top-1 md:right-16 xl:right-[42rem]'>
     <Image src="/images/festa.webp" alt="Festa image" width={500} height={500} className='rounded-2xl' />
     </div>

    </div>
  </div>
  )
}

export default Introduction

import React from 'react';
import { GrLocation } from "react-icons/gr";
import { FaUserEdit } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { RiShakeHandsLine } from "react-icons/ri";

const Description = () => {
  return (
    <div className='w-full bg-black pb-[4rem] flex flex-col mt-2'>
      <div className='flex justify-center items-center'>
        <div className='text-center'>
          <h1 className=' mt-28 text-[20px] sm:text-[30px] md:text-3xl xl:text-3xl font-bold text-customLightGreen mb-4'>Por que nos visitar?</h1>
          <p className=' w-[470px] text-customLightGreen max-w-full font-semibold'>Elevamos sua experiência ao máximo e passamos confiança através de nossa responsabilidade com nossos convidados.</p>
        </div>
      </div>

      <div className='space-x-8 flex flex-wrap justify-center mt-16'>

        <div className='h-[160px] sm:h-[100px] md:h-[190px] w-[160px] sm:w-[120px] md:w-[195px] bg-greenxd rounded-lg border mb-4'>
          <div className='bg-white w-16 h-16 mt-4 ml-4 rounded-lg border flex items-center justify-center'>
            <GrLocation className=' text-3xl' />
          </div>

          <div>
            <h1 className=' font-bold mt-2 ml-4'>Localização</h1>
            <p className='w-[300px] max-w-full text-sm font-semibold mt-1 ml-4'>R. Maria Cristina, 50 - Casqueiro, Cubatão - SP, 11533-160</p>
          </div>
        </div>


        <div className='h-[160px] sm:h-[100px] md:h-[190px] w-[160px] sm:w-[80px] md:w-[195px] bg-greenxd rounded-lg border mb-4'>
          <div className='bg-white w-16 h-16 mt-4 ml-4 rounded-lg border flex items-center justify-center'>
            <FaUserEdit className='text-3xl ml-2' />
          </div>
          <div>
            <h1 className=' font-bold mt-2 ml-4 text-1xl'>Experiência Única</h1>
            <p className='w-[180px] max-w-full text-sm font-semibold mt-0 ml-4'>Nossos eventos temáticos visam proporcionar muita diversão.</p>
          </div>

        </div>


        <div className='h-[160px] sm:h-[100px] md:h-[190px] w-[160px] sm:w-[80px] md:w-[195px] bg-greenxd rounded-lg border mb-4'>


          <div className=' bg-white w-16 h-16 mt-4 ml-4 rounded-lg border flex items-center justify-center'>
            <LuClipboardList className=' text-3xl' />
          </div>
          <div>
            <h1 className=' font-bold mt-2 ml-4 text-1xl'>Segurança</h1>
            <p className='w-[180px] max-w-full text-sm font-semibold mt-0 ml-4'>Controlamos que tipo de pessoa permanecerá no evento</p>
          </div>

        </div>


        <div className='h-[160px] sm:h-[100px] md:h-[190px] w-[160px] sm:w-[80px] md:w-[195px] bg-greenxd rounded-lg border mb-4'>

          <div className=' bg-white w-16 h-16 mt-4 ml-4 rounded-lg border flex items-center justify-center'>
            <RiShakeHandsLine className=' text-3xl' />
          </div>
          <div>
            <h1 className=' font-bold mt-2 ml-4 text-1xl'>Suporte</h1>
            <p className='w-[180px] max-w-full text-sm font-semibold mt-0 ml-4'>Temos voluntários que estarão a disposição do convidado</p>
          </div>


        </div>

      </div>




    </div>
  );
}

export default Description;

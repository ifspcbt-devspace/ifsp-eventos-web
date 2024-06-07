import React from 'react';
import Image from 'next/image';

const Events = () => {
    return (
        <div className='pt-[20px] md:pt-[20px] pb-[12rem] bg-black'>
            <div className='flex justify-center items-center'>
                <div className='text-center'>
                    <h1 className='mt-2 text-[20px] sm:text-[30px] md:text-3xl xl:text-3xl font-bold text-customLightGreen mb-4'>Nossos Próximos Eventos</h1>
                </div>
            </div>

            <div className='space-x-8 flex flex-wrap justify-center mt-16'>

                <div className='relative w-[17%]'>
                    <div className='h-[285px]'>
                        <Image src="/images/festajunina.jpg" alt='festajunina' quality={100} layout='fill' className='rounded-lg' />
                    </div>
                    <div className='absolute inset-x-0 bottom-0 bg-greenxd h-[100px] rounded-b-[10px]'>
                        <h1 className=' text-center mt-1 font-bold text-greens'>Festa Junina - 29/06</h1>
                        <p className='font-semibold text-center text-greenp text-[14px]'>0/500 Participantes</p>
                         
                         <button className=' text-[13px] bg-greenp hover:bg-slate-600 transition-all duration-200 text-white font-semibold ml-3 mt-3 px-[0.65rem] py-[0.3rem] rounded-[5px]'>
                        <p className='text-[11px]'>Inscrever</p>
                        </button>

                        <p className='absolute bottom-0 right-0 mr-8 mb-3 font-bold text-greens'>Grátis</p>

                    </div>
                </div>

                  <div className='relative w-[17%]'>
                    <div className='h-[235px]'>
                        <Image src="/images/ponto.webp" alt='festajunina' quality={100} layout='fill' className='rounded-lg' />
                    </div>
                    <div className='absolute inset-x-0 bottom-0 bg-greenxd h-[100px] rounded-b-[10px]'>
                        <h1 className=' text-center mt-1 font-bold text-greens'>Festa Duvidosa - ??/??</h1>
                        <p className='font-semibold text-center text-greenp text-[14px]'>0/500 Participantes</p>
                         
                         <button className=' text-[13px] bg-greenp hover:bg-slate-600 transition-all duration-200 text-white font-semibold ml-3 mt-3 px-[0.65rem] py-[0.3rem] rounded-[5px]'>
                        <p className='text-[11px]'>Inscrever</p>
                        </button>

                        <p className='absolute bottom-0 right-0 mr-8 mb-3 font-bold text-greens'>Grátis</p>

                    </div>
                </div>

                <div className='relative w-[17%]'>
                    <div className='h-[285px]'>
                        <Image src="/images/iconehalloween.jpg" alt='festajunina' quality={100} layout='fill' className='rounded-lg' />
                    </div>
                    <div className='absolute inset-x-0 bottom-0 bg-greenxd h-[100px] rounded-b-[10px]'>
                        <h1 className=' text-center mt-1 font-bold text-greens'>Hallowif - ??/10</h1>
                        <p className='font-semibold text-center text-greenp text-[14px]'>0/500 Participantes</p>
                         
                         <button className=' text-[13px] bg-greenp hover:bg-slate-600 transition-all duration-200 text-white font-semibold ml-3 mt-3 px-[0.65rem] py-[0.3rem] rounded-[5px]'>
                        <p className='text-[11px]'>Inscrever</p>
                        </button>

                        <p className='absolute bottom-0 right-0 mr-8 mb-3 font-bold text-greens'>Grátis</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;

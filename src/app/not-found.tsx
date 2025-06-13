import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página não encontrada',
};

export default function NotFound() {
  return (
    <div className='bg-back-grey'>
      <div className='utility-page-wrap'>
        <div className='utility-page-content'>
          <Image
            src='/images/not-found-icon.svg'
            alt='Página não encontrada'
            width={128}
            height={128}
            className='mb-4 text-white'
          />
          <h1 className='mb-5 block text-5xl font-semibold'>
            Página não encontrada
          </h1>
          <p>A página que você procura não existe ou foi movida.</p>
          <Link
            href='/'
            className='hover:bg-silver rounded-lg bg-white px-7 py-2 text-center text-lg font-medium text-black shadow-sm duration-200'
          >
            Ir para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

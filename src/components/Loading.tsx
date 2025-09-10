'use client';

import { Spinner } from '@heroui/react';

export default function Loading({ className = '' }: { className?: string }) {
  return (
    <div
      className={
        'flex py-40 w-full flex-col items-center justify-center bg-white text-black ' +
        className
      }
    >
      <Spinner
        aria-label='Carregando...'
        color='default'
        classNames={{
          wrapper: 'w-20 h-20 text-6xl mb-6',
        }}
      />
      <span className='text-2xl font-medium'>Carregando...</span>
    </div>
  );
}

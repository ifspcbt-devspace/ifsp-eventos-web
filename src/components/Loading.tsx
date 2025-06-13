'use client';

import { CircularProgress } from '@heroui/react';

export default function Loading({ className = '' }: { className?: string }) {
  return (
    <div
      className={
        'flex py-40 w-full flex-col items-center justify-center bg-white text-black ' +
        className
      }
    >
      <CircularProgress
        aria-label='Carregando...'
        classNames={{
          svg: 'w-20 h-20 text-black',
          indicator: 'stroke-black',
          track: 'stroke-gray-200',
        }}
      />
      <span className='text-2xl font-medium'>Carregando...</span>
    </div>
  );
}

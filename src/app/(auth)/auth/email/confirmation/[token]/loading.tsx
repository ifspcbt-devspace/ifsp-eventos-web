import { Spinner } from '@heroui/react';

export default function Loading() {
  return (
    <div className='flex h-dvh w-full flex-col items-center justify-center'>
      <Spinner
        aria-label='Carregando...'
        color='default'
        classNames={{
          wrapper: 'w-20 h-20 text-6xl mb-6',
        }}
      />
      <span className='text-3xl'>Carregando...</span>
    </div>
  );
}

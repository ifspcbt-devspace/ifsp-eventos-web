import { CircularProgress } from '@heroui/react';

export default function Loading() {
  return (
    <div className='flex h-dvh w-full flex-col items-center justify-center'>
      <CircularProgress
        classNames={{ svg: 'w-32 h-32', base: 'mb-16' }}
        aria-label='Loading...'
      />
      <span className='text-3xl'>Carregando...</span>
    </div>
  );
}

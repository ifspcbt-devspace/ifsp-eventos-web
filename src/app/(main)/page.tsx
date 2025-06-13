import Events from '@/components/events/Events';
import React, { Suspense } from 'react';
import Hero from '@/components/home/Hero';
import Warn from '@/components/home/Warn';
import Loading from '@/components/Loading';

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <Events max={3} />
      </Suspense>
      <Warn />
    </>
  );
}

import Events from '@/components/events/Events';
import React, { Suspense } from 'react';
import Warn from '@/components/home/Warn';
import LightPageHeader from '@/components/LightPageHeader';
import Loading from '@/components/Loading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eventos',
};

export default function EventsPage() {
  return (
    <div className='bg-back-grey'>
      <LightPageHeader title={'Todos eventos'} />
      <Suspense fallback={<Loading />}>
        <Events all={true} />
      </Suspense>
      <Warn />
    </div>
  );
}

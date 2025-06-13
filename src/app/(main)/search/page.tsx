'use client';

import Events from '@/components/events/Events';
import React, { Suspense } from 'react';
import LightPageHeader from '@/components/LightPageHeader';
import Loading from '@/components/Loading';
import { redirect, RedirectType, useSearchParams } from 'next/navigation';

export default function SearchEvents() {
  return (
    <Suspense fallback={<Loading />}>
      <Search />
    </Suspense>
  );
}

function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  if (query == '') redirect('/events', RedirectType.replace);
  return (
    <div className='bg-back-grey'>
      <title>Resultados da Pesquisa | IFSP Eventos</title>
      <LightPageHeader title={'Resultados da pesquisa'} />
      <Events search={query} />
    </div>
  );
}

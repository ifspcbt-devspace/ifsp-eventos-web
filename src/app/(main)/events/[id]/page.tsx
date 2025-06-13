import React, { Suspense } from 'react';
import { getEvent } from '@/server-actions/event.action';
import { Metadata } from 'next';
import EventViewComponent from '@/components/events/single/EventView';

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const id = params.id;

  const event = await getEvent(id);
  if ('error' in event) {
    return {
      title: 'Evento não encontrado',
      description:
        'O evento que você está tentando acessar não foi encontrado.',
    };
  }

  return {
    title: event.name,
    description: event.description,
  };
}

export default async function EventPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  return (
    <div className='bg-back-grey'>
      <div className='min-h-[90vh] bg-white'>
        <Suspense fallback={'Carregando...'}>
          <EventViewComponent params={params} />
        </Suspense>
      </div>
    </div>
  );
}

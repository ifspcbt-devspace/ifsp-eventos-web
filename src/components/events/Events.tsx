'use client';

import React from 'react';
import EventCard from './EventCard';
import { Event } from '@/models';
import Loading from '@/components/Loading';
import Link from 'next/link';
import { searchEvents } from '@/server-actions/event.action';

const Events = ({
  max,
  search,
  all = false,
}: {
  max?: number;
  search?: string;
  all?: boolean;
}) => {
  const [events, setEvents] = React.useState<Event[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const events = await searchEvents(search, max);

      if ('error' in events) {
        console.error(events.error);
        setLoading(false);
        return;
      }
      setEvents(events);
      //setLoading(false);
    };
    fetchEvents();
  }, [search]);

  return (
    <div className={`grid w-full grid-cols-10 bg-white px-4 py-20 xl:px-0`}>
      {!all && !search && (
        <div
          className={`col-span-10 col-start-1 mb-6 flex items-start justify-between xl:col-span-6 xl:col-start-3`}
        >
          <span
            className={`block text-xl leading-[1.4em] font-semibold md:text-2xl`}
          >
            Eventos
          </span>
          <Link
            href={`/events`}
            className={`inset-1 inline-block cursor-pointer rounded-lg bg-[#f5f6f7] px-6 py-2 text-center text-sm font-medium text-[#626a72] shadow-inner duration-200 hover:bg-[#e7ecf0] hover:text-[#626a72] md:text-lg`}
          >
            Veja todos eventos
          </Link>
        </div>
      )}

      {loading ? (
        <Loading className='col-span-10 col-start-1' />
      ) : (
        <div
          className={`col-span-10 col-start-1 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 xl:col-span-6 xl:col-start-3 xl:grid-cols-3`}
        >
          {events.map((event) => {
            return (
              <EventCard
                key={event.id}
                event={{
                  id: event.id,
                  date: event.init_date,
                  description: event.description,
                  name: event.name,
                  owner: 'IFSP Cubatão',
                  imgUrl: `https://eventos.gremioifspcbt.shop/api/v1/event/${event.id}/thumbnail`,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Events;

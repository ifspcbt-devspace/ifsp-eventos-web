"use client";

import React from "react";
import EventCard from "./EventCard";
import {Event} from "@/models";
import Loading from "@/components/Loading";
import Link from "next/link";
import {searchEvents} from "@/server-actions/event.action";

const Events = ({max, search, all = false}: { max?: number, search?: string, all?: boolean }) => {
  const [events, setEvents] = React.useState<Event[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const events = await searchEvents(search, max);

      if ("error" in events) {
        console.error(events.error);
        setLoading(false);
        return;
      }
      setEvents(events);
      setLoading(false);
    };
    fetchEvents();
  }, [search]);

  if (loading) return <Loading/>;

  return (
    <div className={`w-full py-20 bg-white grid grid-cols-10 px-4 xl:px-0`}
    >
      {!all && !search && (
        <div className={`col-start-1 col-span-10 xl:col-start-3 xl:col-span-6 flex items-start justify-between mb-6`}>
          <span className={`text-xl md:text-2xl leading-[1.4em] font-semibold block`}>Eventos</span>
          <Link href={`/events`}
                className={`text-sm md:text-lg hover:text-[#626a72] hover:bg-[#e7ecf0] bg-[#f5f6f7] text-[#626a72] shadow-inner inset-1 px-6 py-2 font-medium text-center rounded-lg duration-200 cursor-pointer inline-block`}>Veja
            todos eventos</Link>
        </div>
      )}

      <div className={`col-start-1 col-span-10 xl:col-start-3 xl:col-span-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-12`}>
        {
          events.map(event => {
            return (<EventCard key={event.id} event={{
              id: event.id,
              date: event.init_date,
              description: event.description,
              name: event.name,
              owner: "IFSP Cubatão",
              imgUrl: `https://eventos.gremioifspcbt.shop/api/v1/event/${event.id}/thumbnail`
            }}/>)
          })
        }
      </div>

    </div>
  );
};

export default Events;

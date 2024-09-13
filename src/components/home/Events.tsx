"use client";

import React from "react";
import EventCard from "./EventCard";
import {Event} from "@/models";
import Loading from "@/app/auth/email/confirmation/[token]/loading";
import {useRouter} from "next/navigation";
import Link from "next/link";

const mockEvents = [
  {
    id: "100001",
    name: "Festa Junina",
    description: "Expedita laborum suscipit sequi et nobis voluptas fuga placeat.\n" +
      "Omnis est ratione.\n" +
      "Repellendus recusandae a.\n" +
      "Nulla quia cum aliquam dolores beatae tempore harum pariatur.\n" +
      "Velit amet officiis.",
    img: "/images/default-event-thumb.svg",
    owner: "IFSP Cubatão",
    date: "2024-09-01T00:00:00",
  },
  {
    id: "100002",
    name: "Festa Junina",
    description: "Expedita laborum suscipit sequi et nobis voluptas fuga placeat.\n" +
      "Omnis est ratione.\n" +
      "Repellendus recusandae a.\n" +
      "Nulla quia cum aliquam dolores beatae tempore harum pariatur.\n" +
      "Velit amet officiis.",
    img: "/images/default-event-thumb.svg",
    owner: "IFSP Cubatão",
    date: "2024-09-01T00:00:00",
  },
  {
    id: "100003",
    name: "Festa Junina",
    description: "Expedita laborum suscipit sequi et nobis voluptas fuga placeat.\n" +
      "Omnis est ratione.\n" +
      "Repellendus recusandae a.\n" +
      "Nulla quia cum aliquam dolores beatae tempore harum pariatur.\n" +
      "Velit amet officiis.",
    img: "/images/default-event-thumb.svg",
    owner: "IFSP Cubatão",
    date: "2024-09-01T00:00:00",
  }
]

const Events = () => {
  const [events, setEvents] = React.useState<Event[]>([]);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    const fetchEvents = async () => {
      //const events = await searchEvents();
      //setEvents(events);
      setLoading(false);
    };
    fetchEvents();
  }, [router]);

  if ((events && "error" in events) || loading) return <Loading/>;

  return (
    <div className={`w-full py-20 bg-white grid grid-cols-10`}
    >

      <div className={`col-start-3 col-span-6 flex items-start justify-between mb-6`}>
        <span className={`text-2xl leading-[1.4em] font-semibold block`}>Eventos</span>
        <Link href={`#`}
              className={`hover:text-[#626a72] hover:bg-[#e7ecf0] bg-[#f5f6f7] text-[#626a72] shadow-inner inset-1 px-6 py-2 font-medium leading-6 text-center rounded-lg duration-200 cursor-pointer inline-block`}>Veja
          todos eventos</Link>
      </div>

      <div className={`col-start-3 col-span-6 grid grid-cols-3 gap-y-8 gap-x-12`}>
        {
          mockEvents.map(event => {
            return (<EventCard event={event}/>)
          })
        }
      </div>

    </div>
  );
};

export default Events;

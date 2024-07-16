"use client";

import React from "react";
import EventCard from "./EventCard";
import { Event } from "@/models";
import Loading from "@/app/auth/email/confirmation/[token]/loading";
import { toastConfig } from "@/utils";
import { toast } from "react-toastify";
import {
  enrollUser,
  listUserEnrollments,
} from "@/server-actions/enrollment.action";
import { searchEvents } from "@/server-actions/event.action";

const Events = () => {
  const [events, setEvents] = React.useState<Event[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const events = await searchEvents();
      setEvents(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  if ((events && "error" in events) || loading) return <Loading />;

  return (
    <div
      id="eventos"
      className="mt-5 mb-48 bg-black w-full flex flex-col items-center"
    >
      <div className="text-center">
        <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-customLightGreen">
          Nossos Próximos Eventos
        </h1>
      </div>
      <div className="mt-16 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        {events.map((event) => (
          <EventCard
            key={event.id}
            handleEventClick={async () => {
              const enrollments = await listUserEnrollments();
              if ("error" in enrollments) {
                toast.error("Você não está autenticado", toastConfig);
              } else if (
                enrollments.some(
                  (enrollment: any) => enrollment.event_id === event.id
                )
              ) {
                toast.warn("Você já está inscrito neste evento", toastConfig);
              } else {
                const resp = await enrollUser(event.id);
                if (resp && "error" in resp) {
                  toast.error(resp.error, toastConfig);
                } else {
                  toast.success("Inscrição realizada com sucesso", toastConfig);
                }
              }
            }}
            name={event.name}
            date={event.init_date.toLocaleDateString()}
            maxParticipants={500}
            imageSrc="/images/festajunina.jpg"
          />
        ))}
        <EventCard
          name="Hallowif"
          handleEventClick={() => toast.warn("Evento bloqueado", toastConfig)}
          date="??/10"
          maxParticipants={500}
          imageSrc="/images/iconeinterrogacao.webp"
        />
        <EventCard
          name="Em breve"
          handleEventClick={() => toast.warn("Evento bloqueado", toastConfig)}
          date="??/??"
          maxParticipants={500}
          imageSrc="/images/iconeinterrogacao.webp"
        />
      </div>
    </div>
  );
};

export default Events;
